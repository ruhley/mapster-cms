/* global _ */
import Ember from "ember";
import AfterModelMixin from "../../mixins/after-model";
import config from '../../config/environment';

export default Ember.Route.extend(AfterModelMixin, {
    model: function(params, transition) {
        var _this = this,
            baseModel = _this.modelFor('entity'),
            version = {};

        this.params = {
            entity: transition.params.entity.entity,
            id: params.id
        };

        version[this.params.entity + '_id'] = this.params.id;

        if (this.params.entity) {
            if (this.params.id) {
                if (this.params.id === '0') {
                    return Ember.RSVP.hash({
                        item: this.store.createRecord(this.params.entity),
                        versions: [],
                        fields: Ember.$.get(config.APP.api + '/mapster_entity_fields.json?order=sequence&contains=MapsterEntityFieldTypes&conditions=mapster_entity_id=' + baseModel.entity.get('id'))
                    }).then(function(hash) {
                        for (var i = 0; i < hash.fields.data.length; i++) {
                            hash.fields.data[i].mapster_entity_field_type.component = hash.fields.data[i].mapster_entity_field_type.name + '-field';
                        }
                        hash.fields = hash.fields.data;
                        return Ember.$.extend(true, hash, baseModel);
                    });
                } else {
                    return Ember.RSVP.hash({
                        item: this.store.find(this.params.entity, this.params.id),
                        versions: this.store.find(this.params.entity + '_version', version),
                        fields: Ember.$.get(config.APP.api + '/mapster_entity_fields.json?order=sequence&contains=MapsterEntityFieldTypes&conditions=mapster_entity_id=' + baseModel.entity.get('id'))
                    }).then(function(hash) {
                        for (var i = 0; i < hash.fields.data.length; i++) {
                            hash.fields.data[i].mapster_entity_field_type.component = hash.fields.data[i].mapster_entity_field_type.name + '-field';
                        }
                        hash.fields = hash.fields.data;
                        return Ember.$.extend(true, hash, baseModel);
                    });
                }
            } else {
                throw new Error('Id is required');
            }
        } else {
            throw new Error('Entity is required');
        }
    },
    reloadVersions: function() {
        var _this = this,
            data = {};

        data[this.params.entity + '_id'] = this.params.id;

        this.store.find(this.params.entity + '_version', data).then(function(response) {
            _this.controller.set('model.versions', response);
        });
    },
    actions: {
        update: function() {
            var _this = this,
                item = this.controller.get('model.item');

            if (_.size(item.changedAttributes())) {
                item.save().then(function() {
                    Ember.$.growl({
                        icon: 'glyphicon glyphicon-ok',
                        title: ' <strong>Saved</strong><br>',
                        message: 'Item saved successfully'
                    }, {
                        type: 'success',
                        allow_dismiss: true,
                        placement: {
                            from: 'top',
                            align: 'center'
                        }
                    });

                    _this.reloadVersions();
                }, function() {
                    Ember.$.growl({
                        icon: 'glyphicon glyphicon-warning.sign',
                        title: ' <strong>Error</strong><br>',
                        message: 'Item not saved'
                    }, {
                        type: 'danger',
                        allow_dismiss: true,
                        placement: {
                            from: 'top',
                            align: 'center'
                        }
                    });

                    item.rollback();
                });
            } else {
                alert('You have not entered any changes');
            }
        },
        create: function() {
            var _this = this,
                item = this.controller.get('model.item');

            if (_.size(item.changedAttributes())) {
                item.save().then(function() {
                    Ember.$.growl({
                        icon: 'glyphicon glyphicon-ok',
                        title: ' <strong>Saved</strong><br>',
                        message: 'Item created successfully'
                    }, {
                        type: 'success',
                        allow_dismiss: true,
                        placement: {
                            from: 'top',
                            align: 'center'
                        }
                    });

                    var id = item.get('id');

                    if (id) {
                        _this.transitionTo('entity.info', _this.params.entity, id);
                    }
                }, function() {
                    Ember.$.growl({
                        icon: 'glyphicon glyphicon-warning.sign',
                        title: ' <strong>Error</strong><br>',
                        message: 'Item not created'
                    }, {
                        type: 'danger',
                        allow_dismiss: true,
                        placement: {
                            from: 'top',
                            align: 'center'
                        }
                    });
                });
            } else {
                alert('You have not entered any changes');
            }
        }
    }
});
