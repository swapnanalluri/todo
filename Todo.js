"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo(_task, _description) {
        this._task = _task;
        this._description = _description;
    }
    Object.defineProperty(Todo.prototype, "task", {
        get: function () {
            return this._task;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Todo.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    return Todo;
}());
exports.Todo = Todo;
