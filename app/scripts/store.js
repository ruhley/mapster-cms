DS.RESTAdapter.reopen({
    host: App.api.url,
    pathForType: function(type) {
        var camelized = Ember.String.camelize(type);
        return Ember.String.underscore(Ember.String.pluralize(camelized));
    },
    createRecord: function(store, type, record) {
        var data = {};
        var serializer = store.serializerFor(type.typeKey);
        serializer.serializeIntoHash(data, type, record, {
            includeId: true
        });

        return this.ajax(this.buildURL(type.typeKey), "POST", {
            data: data[type.typeKey]
        });
    },
});

DS.RESTSerializer.reopen({
    extractSingle: function(store, type, payload, id, requestType) {
        payload = this.normalizePayload(payload, type);
        return this.normalize(type, payload);
    },
    normalizePayload: function(payload, type) {
        if (payload._embedded) {
            return payload._embedded;
        }

        payload[type.typeKey] = payload;

        return payload;
    }
});
