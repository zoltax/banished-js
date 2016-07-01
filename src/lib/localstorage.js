function LocalStorageWrapper() {
    if (! this instanceof LocalStorageWrapper)
        return new LocalStorageWrapper();
}

LocalStorageWrapper.prototype.init = function () {
    if (typeof(Storage) !== "undefined") {
        return this;
    } else {
        return false;
    }
}

LocalStorageWrapper.prototype.get = function (item) {
    return localStorage.item
}

LocalStorageWrapper.prototype.set = function (item, value) {
    localStorage.item = value;
}
