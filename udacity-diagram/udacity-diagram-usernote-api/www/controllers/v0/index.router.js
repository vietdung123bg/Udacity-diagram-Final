"use strict";
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
exports.IndexRouter = void 0;
const express_1 = require("express");
const notes_router_1 = require("./note/routes/notes.router");
const users_router_1 = require("./user/routes/users.router");
const router = (0, express_1.Router)();
router.use('/note', notes_router_1.NoteRouter);
router.use('/users', users_router_1.UserRouter);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(`V0`);
}));
exports.IndexRouter = router;
//# sourceMappingURL=index.router.js.map