/* global Snap */
import Ember from "ember";

export default Ember.Component.extend({
    didInsertElement: function() {
        this.mapChange();
    },
    mapChange: function() {
        var _this = this,
            item = this.get('item'),
            mapId = item.get('map_id'),
            previousMapId = this.get('previousMapId'),
            store = this.get('targetObject.store');

        if (mapId) {
            if (mapId !== previousMapId) {
                Ember.RSVP.hash({
                    map: store.find('map', mapId),
                    places: store.find('place', {
                        map_id: mapId
                    })
                }).then(function(hash) {
                    _this.set('map', hash.map);
                    _this.set('places', hash.places);
                    _this.rerender();
                });

                this.set('previousMapId', mapId);
            } else {
                _this.updateSvg();
            }
        }
    }.observes('item.map_id'),
    updateSvg: function() {
        var _this = this,
            s = new Snap('#coords'),
            image = document.createElement('img'),
            imageSrc = this.get('map.image'),
            currentPoints = this.get('item.coordinates') || '',
            points = [],
            path = s.path().attr({
                stroke: '#FF0000',
                strokeWidth: 3,
                fill: 'none'
            });

        if (imageSrc) {
            image.onload = function() {
                s.attr({
                    width: image.width + 'px',
                    height: image.height + 'px',
                    viewport: '0 0 ' + image.width + 'px ' + image.height + 'px'
                });
            };
            image.src = imageSrc;
        }

        s.click(function(evt) {
            if (evt.target.tagName !== 'circle') {
                _this.addPoint(s, evt.layerX, evt.layerY, points, path);
            }
        }).drag(function() {

        });

        currentPoints = currentPoints.split(',');

        for (var i = 0; i < currentPoints.length; i++) {
            if (currentPoints[i]) {
                var pos = currentPoints[i].split(' ');
                this.addPoint(s, pos[0], pos[1], points, path);
            }
        }
    },
    addPoint: function(s, x, y, points, path) {
        var _this = this,
            circle = s.circle(x, y, 5);

        circle.attr({
            fill: '#FF0000',
            stroke: '#000000',
            strokeWidth: 1,
            class: 'coords-point'
        }).dblclick(function() {
            this.remove();

            for (var i = 0; i < points.length; i++) {
                if (points[i] === this) {
                    points.splice(i, 1);
                    break;
                }
            }
            _this.redrawPath(s, points, path);
        }).drag(function(diffX, diffY, x, y, evt) {
            evt.preventDefault();

            this.attr({
                cx: evt.layerX,
                cy: evt.layerY
            });

            _this.redrawPath(s, points, path);
        });

        points.push(circle);

        _this.redrawPath(s, points, path);
    },
    redrawPath: function(s, points, path) {
        var pathArray = [];

        for (var i = 0; i < points.length; i++) {
            pathArray.push(points[i].attr('cx') + ' ' + points[i].attr('cy'));
        }

        this.set('item.coordinates', pathArray.join(','));

        if (points.length > 2) {
            pathArray.push(points[0].attr('cx') + ' ' + points[0].attr('cy'));
        }

        path.attr('d', pathArray.length === 0 ? '' : 'M ' + pathArray.join(' L '));
    }
});