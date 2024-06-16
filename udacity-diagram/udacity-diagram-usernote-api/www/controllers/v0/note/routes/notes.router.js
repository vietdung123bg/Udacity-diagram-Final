"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRouter = exports.requireAuth = void 0;
const express_1 = require("express");
const NoteItem_1 = require("../models/NoteItem");
const jwt = __importStar(require("jsonwebtoken"));
const c = __importStar(require("../../../../config/config"));
const router = (0, express_1.Router)();
function requireAuth(req, res, next) {
    if (!req.headers || !req.headers.authorization) {
        return res.status(401).send({ message: 'No authorization headers.' });
    }
    const tokenBearer = req.headers.authorization.split(' ');
    if (tokenBearer.length != 2) {
        return res.status(401).send({ message: `Malformed token. ${tokenBearer.length}` });
    }
    const token = tokenBearer[1];
    return jwt.verify(token, c.config.jwt.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
        }
        return next();
    });
}
exports.requireAuth = requireAuth;
// Get all note items
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield NoteItem_1.NoteItem.findAndCountAll({ order: [['id', 'DESC']] });
    res.send(items);
}));
// Get a note resource
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const item = yield NoteItem_1.NoteItem.findByPk(id);
    res.send(item);
}));
// Create note with metadata
router.post('/', requireAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskName = req.body.taskName;
    const toDo = req.body.toDo;
    if (!taskName) {
        return res.status(400).send({ message: 'Task name is required or malformed.' });
    }
    if (!toDo) {
        return res.status(400).send({ message: 'To Do is required or malformed.' });
    }
    //@ts-ignore
    const item = yield new NoteItem_1.NoteItem({
        taskName: taskName,
        toDo: toDo
    });
    const savedItem = yield item.save();
    res.status(201).send(savedItem);
}));
exports.NoteRouter = router;
//# sourceMappingURL=notes.router.js.map