DS.RESTAdapter.reopen({
    host: 'http://localhost/mapster-api/public',
    pathForType: function(type) {
        var camelized = Ember.String.camelize(type);
        return Ember.String.pluralize(camelized).replace(/([A-Z])/g, '_$1').toLowerCase();
    }
});

DS.RESTSerializer.reopen({
    extractCreateRecord: function(store, type, payload, id, requestType) {
        console.log(arguments);
        return this.extractSave(store, type, payload, id, requestType);
    },
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
