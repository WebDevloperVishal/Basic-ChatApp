import {createServer} from "http";
import { Server } from "socket.io";
import express from "express";



const app = express();

const server = createServer(app);