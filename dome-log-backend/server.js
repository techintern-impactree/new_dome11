import express from "express"; 
import cors from "cors"; 
import { MongoClient, ObjectId } from "mongodb"; 
import "dotenv/config"; 

import multer from "multer";
import path from "path";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import http from 'http';
import { WebSocketServer } from 'ws';
import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Store active WebRTC signaling connections
const clients = new Map();
const streams = new Map();

const PORT = process.env.PORT || 4001;
 const URL = process.env.DB;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Drone Asset Management API",
      version: "1.0.0",
      description: "API documentation for Drone Assets & Telemetry"
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Local server"
      }
    ]
  },
  apis: ["./server.js"] // 👈 change filename if needed
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * components:
 *   schemas:
 *     Asset:
 *       type: object
 *       properties:
 *         asset_id:
 *           type: string
 *           example: SRV01
 *         asset_name:
 *           type: string
 *           example: Thermal Camera
 *         asset_type:
 *           type: string
 *           example: Surveillance
 *         asset_model:
 *           type: string
 *           example: TH-200
 *         manufacturer:
 *           type: string
 *           example: Zuppa Tech
 *         specification:
 *           type: string
 *           example: Thermal 640x480
 *         drone_status:
 *           type: string
 *           example: Ready
 *         asset_image:
 *           type: string
 *           example: /uploads/assets/image.png
 */

/**
 * @swagger
 * /assets:
 *   post:
 *     summary: Create a new asset
 *     tags: [Assets]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - asset_name
 *               - asset_type
 *             properties:
 *               asset_name:
 *                 type: string
 *               asset_type:
 *                 type: string
 *                 enum: [Surveillance, Payload, Battery, Sensor]
 *               asset_model:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               specification:
 *                 type: string
 *               asset_image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Asset created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Asset'
 */


/**
 * @swagger
 * /assets:
 *   get:
 *     summary: Get all assets
 *     tags: [Assets]
 *     responses:
 *       200:
 *         description: List of assets
 */

/**
 * @swagger
 * /drones:
 *   get:
 *     summary: Get all drones
 *     tags: [Drones]
 *     responses:
 *       200:
 *         description: List of drones
 */


/**
 * @swagger
 * /assets/{asset_id}:
 *   get:
 *     summary: Get asset by asset_id
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: asset_id
 *         required: true
 *         schema:
 *           type: string
 *           example: SRV01
 *     responses:
 *       200:
 *         description: Asset found
 *       404:
 *         description: Asset not found
 */

/**
 * @swagger
 * /assets/{asset_id}:
 *   put:
 *     summary: Update asset
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: asset_id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               asset_name:
 *                 type: string
 *               asset_model:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               specification:
 *                 type: string
 *               asset_image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Asset updated
 */


/**
 * @swagger
 * /assets/{asset_id}:
 *   delete:
 *     summary: Delete asset
 *     tags: [Assets]
 *     parameters:
 *       - in: path
 *         name: asset_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Asset deleted
 */


/**
 * @swagger
 * /log-connections/mirror:
 *   post:
 *     summary: Mirror log connection data (start session)
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Log connection mirrored successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Log connection stored successfully
 *                 session_id:
 *                   type: string
 *                   example: 65c1a4d2f7b0a9e1d4c8a111
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */


/**
 * @swagger
 * /datalog_live:
 *   post:
 *     summary: Mirror log connection data (start session)
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Log connection mirrored successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Log connection stored successfully
 *                 session_id:
 *                   type: string
 *                   example: 65c1a4d2f7b0a9e1d4c8a111
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /is_active:
 *   post:
 *     summary: Status of the drone
 *     tags: [Sessions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Status activated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Status activated successfully
 *                 session_id:
 *                   type: string
 *                   example: 65c1a4d2f7b0a9e1d4c8a111
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */


// ------------------------ DB --------------------------------------
let client;
async function getDb() {
  if (!client) {
    client = new MongoClient(URL);
    await client.connect();
    console.log("✅ MongoDB connected");
  }
  return client.db("drone");
}
getDb();

// ------------------------ Middleware ----------------------------------
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use("/uploads", express.static("uploads"));


const ASSET_PREFIX = {
  Surveillance: "SRV",
  Payload: "PAY",
  Kamikaze: "KMZ",
  Logistics: "LOG",
  Hybrid: "HYB"
};

// --------------------------------- Multer setup for file uploads ------------------------

// ensure upload directory exists
// const uploadDir = "./uploads/assets";
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

const uploadPath = '/tmp/uploads/assets';
if (!fs.existsSync(uploadPath)) {
 fs.mkdirSync(uploadPath, { recursive: true });
}


// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadDir);
//   },
//   filename: (req, file, cb) => {
//     const ext = path.extname(file.originalname);
//     const name = file.fieldname + "-" + Date.now() + ext;
//     cb(null, name);
//   }
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     if (!file.mimetype.startsWith("image/")) {
//       cb(new Error("Only image files allowed"));
//     }
//     cb(null, true);
//   }
// });


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now() + ext;
    cb(null, name);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Only image files allowed"));
    }
    cb(null, true);
  }
});

// ------------------------ Server test route ------------------------
app.get("/", (req, res) => {
  res.send(`
    <h1>Drone Log Backend + WebRTC Signaling Server</h1>
    <p>Status: Running ✓</p>
    <p>Active Clients: ${clients.size}</p>
    <p>Active Streams: ${streams.size}</p>
    <p>WebSocket endpoint: ws://${req.headers.host}</p>
    <p><a href="/api-docs">Swagger API Docs</a></p>
    <p><a href="/api/health">Health Check</a></p>
    <p><a href="/api/streams">Active Streams</a></p>
  `);
});

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: WebRTC signaling server health check
 *     tags: [Signaling]
 *     responses:
 *       200:
 *         description: Server health status
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 activeClients:
 *                   type: integer
 *                 activeStreams:
 *                   type: integer
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    activeClients: clients.size,
    activeStreams: streams.size
  });
});

/**
 * @swagger
 * /api/streams:
 *   get:
 *     summary: List all active WebRTC streams
 *     tags: [Signaling]
 *     responses:
 *       200:
 *         description: List of active streams
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 streams:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       streamerId:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                       viewerCount:
 *                         type: integer
 */
app.get('/api/streams', (req, res) => {
  const streamList = Array.from(streams.values()).map(stream => ({
    id: stream.id,
    streamerId: stream.streamerId,
    createdAt: stream.createdAt,
    viewerCount: stream.viewers.size
  }));
  res.json({ streams: streamList });
});


// ================================================================
// 1️⃣ CREATE / ENSURE CONNECTION SESSION (ONE TIME and )
// ================================================================
app.post("/log-connections", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const {
      username,
      drone_name,
      blutooth_address,
      androidVersion,
      deviceInfo
    } = req.body;

    if (!username || !drone_name || !blutooth_address) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const now = new Date();

    // 1️⃣ Ensure device document exists
    await col.updateOne(
      { drone_name, blutooth_address },
      {
        $setOnInsert: {
          drone_name,
          blutooth_address,
          createdAt: now,
          users: []
        },
        $set: { updatedAt: now }
      },
      { upsert: true }
    );

    // 2️⃣ Ensure user exists
    await col.updateOne(
      {
        drone_name,
        blutooth_address,
        "users.username": { $ne: username }
      },
      {
        $push: {
          users: {
            username,
            createdAt: now,
            updatedAt: now,
            log_data_connections: []
          }
        }
      }
    );

    // 3️⃣ 🚫 CHECK FOR ACTIVE SESSION (MOST IMPORTANT)
    const existing = await col.findOne({
      drone_name,
      blutooth_address,
      "users.username": username,
      "users.log_data_connections.closedAt": null
    });

    if (existing) {
      // ✅ Session already open → do nothing
      return res.json({
        success: true,
        message: "Session already active"
      });
    }

    // 4️⃣ Create NEW session only if none is active
    const sessionKey = `${androidVersion}_${deviceInfo}_${now.getTime()}`;

    await col.updateOne(
      {
        drone_name,
        blutooth_address,
        "users.username": username
      },
      {
        $push: {
          "users.$.log_data_connections": {
            sessionKey,
            androidVersion,
            deviceInfo,
            logs: [],
            createdAt: now,
            updatedAt: now,
            closedAt: null
          }
        },
        $set: { updatedAt: now }
      }
    );

    res.json({ success: true, sessionKey });

  } catch (err) {
    console.error("log-connections error:", err);
    res.status(500).json({ success: false });
  }
});



// ================================================================
// 2️⃣ APPEND LIVE TELEMETRY LOGS (MANY TIMES)
// ================================================================
app.post("/log-telemetry", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const {
      drone_name,
      blutooth_address,
      username,
      log
    } = req.body;

    if (!log) {
      return res.status(400).json({ success: false, message: "No log data" });
    }

    const now = new Date();

    const result = await col.updateOne(
      {
        drone_name,
        blutooth_address,
        "users.username": username
      },
      {
        $push: {
          "users.$[u].log_data_connections.$[s].logs": {
            data: log,
            ts: now
          }
        },
        $set: {
          "users.$[u].log_data_connections.$[s].updatedAt": now,
          updatedAt: now
        }
      },
      {
        arrayFilters: [
          { "u.username": username },
          { "s.closedAt": null }   // 🔥 ACTIVE SESSION ONLY
        ]
      }
    );

    if (result.matchedCount === 0) {
      console.warn("⚠️ No active session found for telemetry");
    }

    res.json({ success: true });

  } catch (err) {
    console.error("log-telemetry error:", err);
    res.status(500).json({ success: false });
  }
});



// ================================================================
// 2️⃣ BULK TELEMETRY SYNC (OFFLINE → ONLINE)
// ================================================================
app.post("/log-telemetry-bulk", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const {
      drone_name,
      blutooth_address,
      username,
      logs
    } = req.body;

    if (!Array.isArray(logs) || logs.length === 0) {
      return res.status(400).json({ success: false });
    }

    const now = new Date();

    const result = await col.updateOne(
      {
        drone_name,
        blutooth_address,
        "users.username": username
      },
      {
        $push: {
          "users.$[u].log_data_connections.$[s].logs": {
            $each: logs
          }
        },
        $set: {
          "users.$[u].log_data_connections.$[s].updatedAt": now,
          updatedAt: now
        }
      },
      {
        arrayFilters: [
          { "u.username": username },
          { "s.closedAt": null }
        ]
      }
    );

    res.json({ success: true });

  } catch (err) {
    console.error("bulk telemetry error:", err);
    res.status(500).json({ success: false });
  }
});



// ================================================================
// 3️⃣ OPTIONAL: CLOSE SESSION (ON stopLogger)
// ================================================================
app.post("/close-session", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const {
      drone_name,
      blutooth_address,
      username
    } = req.body;

    const now = new Date();

    await col.updateOne(
      {
        drone_name,
        blutooth_address
      },
      {
        $set: {
          "users.$[u].log_data_connections.$[s].closedAt": now,
          updatedAt: now
        }
      },
      {
        arrayFilters: [
          { "u.username": username },
          { "s.closedAt": null }
        ]
      }
    );

    res.json({ success: true });

  } catch (err) {
    console.error("close-session error:", err);
    res.status(500).json({ success: false });
  }
});

















// ******SANTHIYA FRONTEND********************

// ================================================================
// 0️⃣ GET ALL DRONE NAMES (FIRST STEP ONLY)
// ================================================================
app.get("/log-drones", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const data = await col.aggregate([
      {
        $group: {
          _id: "$drone_name",
          lastUpdatedAt: { $max: "$updatedAt" }
        }
      },
      {
        $sort: { lastUpdatedAt: -1 } // 🔥 recent first
      }
    ]).toArray();

    const drones = data
      .map(item => item._id)
      .filter(Boolean);

    res.json({
      success: true,
      drones
    });

  } catch (err) {
    console.error("get drones error:", err);
    res.status(500).json({ success: false });
  }
});





// ================================================================
// 0️⃣ GET ALL USERNAMES (2nd step STEP ONLY)
// ================================================================

app.get("/log-drones/:droneName/users", async (req, res) => {
  try {
    const { droneName } = req.params;

    const db = await getDb();
    const col = db.collection("connection_devices");

    const doc = await col.findOne(
      { drone_name: droneName },
      { projection: { _id: 0, users: 1 } }
    );

    if (!doc || !doc.users) {
      return res.json({ success: true, users: [] });
    }

    // 🔥 Sort users by recent login (updatedAt DESC)
    const sortedUsers = doc.users
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .map(u => u.username);

    res.json({
      success: true,
      users: sortedUsers
    });

  } catch (err) {
    console.error("get drone users error:", err);
    res.status(500).json({ success: false });
  }
});

// ================================================================
// 4️⃣ GET USER SESSIONS BY DRONE + USER (RECENT FIRST 3nd step STEP ONLY)
// ================================================================

app.get(
  "/log-drones/:droneName/users/:username/sessions",
  async (req, res) => {
    try {
      const { droneName, username } = req.params;

      const db = await getDb();
      const col = db.collection("connection_devices");

      const doc = await col.findOne(
        {
          drone_name: droneName,
          "users.username": username
        },
        {
          projection: {
            _id: 0,
            "users.$": 1
          }
        }
      );

      if (!doc || !doc.users?.length) {
        return res.json({ success: true, sessions: [] });
      }

      const user = doc.users[0];

      const sessions = (user.log_data_connections || [])
        .sort(
          (a, b) =>
            new Date(b.updatedAt || b.createdAt) -
            new Date(a.updatedAt || a.createdAt)
        )
        .map((s, index) => ({
          id: index, // frontend reference only
          deviceName: s.deviceInfo,
          date: s.createdAt,
          status: s.closedAt ? "Closed" : "Active",
          logs: s.logs || []   // 🔥 needed for Excel
        }));

      res.json({
        success: true,
        sessions
      });

    } catch (err) {
      console.error("get sessions error:", err);
      res.status(500).json({ success: false });
    }
  }
);




// New API's for Drone log data

app.get("/drones", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const drones = await col
      .find({})
      .sort({ updatedAt: -1 }) // latest updated first
      .toArray();

    res.json({
      success: true,
      count: drones.length,
      data: drones
    });

  } catch (err) {
    console.error("get all drones error:", err);
    res.status(500).json({ success: false });
  }
});


app.get("/drones/:drone_name", async (req, res) => {
  try {
    const { drone_name } = req.params;

    const db = await getDb();
    const col = db.collection("connection_devices");

    const drone = await col.findOne({ drone_name });

    if (!drone) {
      return res.status(404).json({
        success: false,
        message: "Drone not found"
      });
    }

    res.json({
      success: true,
      data: drone
    });

  } catch (err) {
    console.error("get drone by name error:", err);
    res.status(500).json({ success: false });
  }
});


// app.post('/assets', async (req, res) => {
//   try {
//     const db = await getDb();
//     const col = db.collection("assets");
//     const { assetName, url } = req.body;
//     const result = await col.insertOne({ assetName, url });
//     res.json({ success: true, insertedId: result.insertedId });
//   } catch (err) {
//     console.error("add asset error:", err);
//     res.status(500).json({ success: false });
//   }
// })


// ------------------------- Assets Api's -------------------------

app.post(
  "/assets",
  upload.single("asset_image"),
  async (req, res) => {
    try {
      const db = await getDb();
      const col = db.collection("assets");

      const {
        asset_name,
        asset_type,
        asset_model,
        manufacturer,
        specification,
        drone_status = "Ready",
      } = req.body;

      if (!asset_name || !asset_type) {
        return res.status(400).json({
          success: false,
          message: "asset_name and asset_type required"
        });
      }

      const prefix = ASSET_PREFIX[asset_type];
      if (!prefix) {
        return res.status(400).json({
          success: false,
          message: "Invalid asset_type"
        });
      }

      // get last asset id
      const last = await col
        .find({ asset_type })
        .sort({ createdAt: -1 })
        .limit(1)
        .toArray();

      let next = 1;
      if (last.length) {
        next =
          parseInt(last[0].asset_id.replace(prefix, ""), 10) + 1;
      }

      const asset_id = `${prefix}${String(next).padStart(2, "0")}`;

      const asset_image = req.file
        ? `tmp/uploads/assets/${req.file.filename}`
        : null;

      const now = new Date();

      const doc = {
        asset_id,
        asset_name,
        asset_type,
        asset_model,
        manufacturer,
        specification,
        asset_image,
        drone_status:"Ready",
        createdAt: now,
        updatedAt: now
      };

      await col.insertOne(doc);

      res.json({ success: true, asset: doc });

    } catch (err) {
      console.error("create asset error:", err);
      res.status(500).json({ success: false });
    }
  }
);


app.get("/assets", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("assets");

    const assets = await col.find({}).sort({ createdAt: -1 }).toArray();

    res.json({
      success: true,
      count: assets.length,
      data: assets
    });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});


app.get("/assets/:asset_id", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("assets");

    const asset = await col.findOne({
      asset_id: req.params.asset_id
    });

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found"
      });
    }

    res.json({ success: true, asset });

  } catch (err) {
    res.status(500).json({ success: false });
  }
});


app.put(
  "/assets/:asset_id",
  upload.single("asset_image"),
  async (req, res) => {
    try {
      const db = await getDb();
      const col = db.collection("assets");

      const update = {
        ...req.body,
        updatedAt: new Date()
      };

      if (req.file) {
        update.asset_image = `tmp/uploads/assets/${req.file.filename}`;
      }

      const result = await col.updateOne(
        { asset_id: req.params.asset_id },
        { $set: update }
      );

      if (!result.matchedCount) {
        return res.status(404).json({
          success: false,
          message: "Asset not found"
        });
      }

      res.json({ success: true });

    } catch (err) {
      res.status(500).json({ success: false });
    }
  }
);


app.delete("/assets/:asset_id", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("assets");

    const asset = await col.findOne({
      asset_id: req.params.asset_id
    });

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found"
      });
    }

    // delete image from disk
    if (asset.asset_image) {
      const filePath = "." + asset.asset_image;
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await col.deleteOne({ asset_id: req.params.asset_id });

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false });
  }
});


// Logs Api for Zuppa log data push

// ==================== MIRROR API ====================

app.post("/log-connections/mirror", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");
    // const database = await connectMongo();
    // const col = database.collection("connection_devices");
     const b = req.body;

    if (!b.blutooth_address || !b.drone_name) {
      return res.status(400).json({ error: "invalid payload" });
    }

    const droneName = b.drone_name.trim();
    const droneKey = `${b.blutooth_address}_${droneName}`;

    // ====================================================
    // 1️⃣ DRONE UPSERT
    // ====================================================
    if (!b.user && !b.connection && !b.log) {
      await col.updateOne(
        { drone_key: droneKey },
        {
          $setOnInsert: {
            drone_key: droneKey,
            blutooth_address: b.blutooth_address,
            drone_name: droneName,
            drone_logs: [],
            users: [],
            createdAt: new Date()
          },
          $set: { updatedAt: new Date() }
        },
        { upsert: true }
      );
      return res.json({ step: "drone_ok" });
    }

    // ====================================================
    // 2️⃣ USER (USERNAME IS SOURCE OF TRUTH)
    // ====================================================
    if (b.user) {
      const doc = await col.findOne({ drone_key: droneKey });
      const users = doc?.users || [];

      const existingUser = users.find(
        u => u.username === b.user.username
      );

      if (existingUser) {
        return res.json({
          step: "user_exists",
          user_index: existingUser.user_index
        });
      }

      const nextUserIndex = String(users.length);

      await col.updateOne(
        { drone_key: droneKey },
        {
          $push: {
            users: {
              user_index: nextUserIndex,
              username: b.user.username,
              createdAt: new Date(),
              updatedAt: new Date(),
              log_data_connections: []
            }
          }
        }
      );

      return res.json({
        step: "user_created",
        user_index: nextUserIndex
      });
    }

    // ====================================================
    // 3️⃣ CONNECTION (USERNAME → USER → CONNECTION)
    // ====================================================
    if (b.connection) {
      if (!b.username) {
        return res.status(400).json({ error: "username_missing" });
      }

      const doc = await col.findOne({ drone_key: droneKey });

      const user = doc.users.find(
        u => u.username === b.username
      );

      if (!user) {
        return res.status(400).json({ error: "user_not_found" });
      }

      await col.updateOne(
        {
          drone_key: droneKey,
          "users.user_index": user.user_index
        },
        {
          $push: {
            "users.$.log_data_connections": {
              connection_index: b.connection.connection_index,
              androidVersion: b.connection.androidVersion,
              deviceInfo: b.connection.deviceInfo,
              csvFile: b.connection.csvFile,
              logs: [],
              createdAt: new Date(),
              updatedAt: new Date()
            }
          }
        }
      );

      return res.json({ step: "connection_ok" });
    }

    // ====================================================
    // 4️⃣ LOG (USERNAME → USER → CONNECTION → LOG)
    // ====================================================
    if (b.log) {
      if (!b.username) {
        return res.status(400).json({ error: "username_missing" });
      }

      const doc = await col.findOne({ drone_key: droneKey });

      const user = doc.users.find(
        u => u.username === b.username
      );

      if (!user) {
        return res.status(400).json({ error: "user_not_found" });
      }

      await col.updateOne(
        { drone_key: droneKey },
        {
          $push: {
            "users.$[u].log_data_connections.$[c].logs": {
              log_index: b.log.log_index,
              data: b.log.data,
              ts: new Date(b.log.ts)
            }
          }
        },
        {
          arrayFilters: [
            { "u.user_index": user.user_index },
            { "c.connection_index": b.connection_index }
          ]
        }
      );

      return res.json({ step: "log_ok" });
    }

    return res.json({ ok: true });

  } catch (e) {
    console.error("❌ MIRROR ERROR", e);
    return res.status(500).json({ error: "server_error" });
  }
});

app.post("/datalog_live", async (req, res) => {
  try {
    
    const db = await getDb();
    const col = db.collection("connection_devices");
    const b = req.body;

    // ================= VALIDATION =================
    if (
      !b.blutooth_address ||
      !b.drone_name ||
      !b.log ||
      !b.log.data
    ) {
      return res.status(400).json({ error: "invalid payload" });
    }

    // 🔥 SANITIZE (extra safety)
    const droneName = b.drone_name.trim();
    const droneKey = `${b.blutooth_address}_${droneName}`;

    // ================= UPSERT DRONE =================
    await col.updateOne(
      { drone_key: droneKey },
      {
        $setOnInsert: {
          drone_key: droneKey,
          blutooth_address: b.blutooth_address,
          drone_name: droneName,
          drone_logs: [],
          users: [],
          createdAt: new Date()
        },
        $set: {
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );

    // ================= PUSH DRONE LIVE LOG =================
    await col.updateOne(
      { drone_key: droneKey },
      {
        $push: {
          drone_logs: {
            live_index: b.log.live_index,
            data: b.log.data,
            ts: new Date(b.log.ts || Date.now())
          }
        }
      }
    );

    return res.json({
      step: "drone_live_log_ok",
      drone_key: droneKey
    });

  } catch (e) {
    console.error("❌ DATALOG_LIVE ERROR", e);
    return res.status(500).json({ error: "server_error" });
  }
});

app.post("/is_active", async (req, res) => {
  try {
    const db = await getDb();
    const col = db.collection("connection_devices");

    const b = req.body;

    if (!b.blutooth_address || !b.drone_name || typeof b.isActive !== "boolean") {
      return res.status(400).json({ error: "invalid payload" });
    }

    const droneKey = `${b.blutooth_address}_${b.drone_name}`;

    await col.updateOne(
      { drone_key: droneKey },
      {
        $setOnInsert: {
          drone_key: droneKey,
          blutooth_address: b.blutooth_address,
          drone_name: b.drone_name,
          drone_logs: [],
          users: [],
          createdAt: new Date()
        },
        $set: {
          isActive: b.isActive,
          updatedAt: new Date()
        }
      },
      { upsert: true }
    );

    return res.json({ step: "active_updated", isActive: b.isActive });

  } catch (e) {
    console.error("❌ IS_ACTIVE ERROR", e);
    return res.status(500).json({ error: "server_error" });
  }
});


// ================================================================
// ⚡ WebRTC SIGNALING — WebSocket Server
// ================================================================

wss.on('connection', (ws) => {
  const clientId = uuidv4();
  console.log(`[WS] New client connected: ${clientId}`);

  clients.set(clientId, {
    id: clientId,
    ws: ws,
    type: null, // 'streamer' or 'viewer'
    streamId: null
  });

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      handleMessage(clientId, data);
    } catch (error) {
      console.error('[WS] Error parsing message:', error);
      ws.send(JSON.stringify({ type: 'error', message: 'Invalid message format' }));
    }
  });

  ws.on('close', () => {
    handleDisconnect(clientId);
  });

  ws.on('error', (error) => {
    console.error(`[WS] WebSocket error for client ${clientId}:`, error);
  });

  // Send welcome message with client ID
  ws.send(JSON.stringify({
    type: 'connected',
    clientId: clientId
  }));
});

function handleMessage(clientId, data) {
  const client = clients.get(clientId);
  if (!client) return;

  console.log(`[WS] Message from ${clientId}:`, data.type);

  switch (data.type) {
    case 'register-streamer':
      handleRegisterStreamer(clientId, data);
      break;
    case 'register-viewer':
      handleRegisterViewer(clientId, data);
      break;
    case 'offer':
      handleOffer(clientId, data);
      break;
    case 'answer':
      handleAnswer(clientId, data);
      break;
    case 'ice-candidate':
      handleIceCandidate(clientId, data);
      break;
    case 'stop-stream':
      handleStopStream(clientId);
      break;
    default:
      console.log(`[WS] Unknown message type: ${data.type}`);
  }
}

function handleRegisterStreamer(clientId, data) {
  const client = clients.get(clientId);
  const streamId = data.streamId || uuidv4();

  // Reject if stream ID already in use by an active streamer
  if (streams.has(streamId)) {
    console.log(`[WS] Registration failed: Stream ID '${streamId}' already in use.`);
    client.ws.send(JSON.stringify({
      type: 'error',
      message: `Stream ID '${streamId}' is already in use. Please choose another name.`
    }));
    return;
  }

  client.type = 'streamer';
  client.streamId = streamId;

  streams.set(streamId, {
    id: streamId,
    streamerId: clientId,
    createdAt: new Date().toISOString(),
    viewers: new Set()
  });

  console.log(`[WS] Streamer registered: ${clientId}, stream: ${streamId}`);

  client.ws.send(JSON.stringify({
    type: 'registered',
    role: 'streamer',
    streamId: streamId,
    embedUrl: `${getBaseUrl()}?streamId=${streamId}`
  }));
}

function handleRegisterViewer(clientId, data) {
  const client = clients.get(clientId);
  const streamId = data.streamId;

  if (!streamId || !streams.has(streamId)) {
    client.ws.send(JSON.stringify({
      type: 'error',
      message: 'Stream not found'
    }));
    return;
  }

  client.type = 'viewer';
  client.streamId = streamId;

  const stream = streams.get(streamId);
  stream.viewers.add(clientId);

  console.log(`[WS] Viewer registered: ${clientId}, stream: ${streamId}`);

  client.ws.send(JSON.stringify({
    type: 'registered',
    role: 'viewer',
    streamId: streamId
  }));

  // Notify streamer about new viewer
  const streamer = clients.get(stream.streamerId);
  if (streamer && streamer.ws.readyState === WebSocket.OPEN) {
    streamer.ws.send(JSON.stringify({
      type: 'viewer-joined',
      viewerId: clientId
    }));
  }
}

function handleOffer(clientId, data) {
  const target = clients.get(data.targetId);
  if (target && target.ws.readyState === WebSocket.OPEN) {
    target.ws.send(JSON.stringify({
      type: 'offer',
      offer: data.offer,
      senderId: clientId
    }));
  }
}

function handleAnswer(clientId, data) {
  const target = clients.get(data.targetId);
  if (target && target.ws.readyState === WebSocket.OPEN) {
    target.ws.send(JSON.stringify({
      type: 'answer',
      answer: data.answer,
      senderId: clientId
    }));
  }
}

function handleIceCandidate(clientId, data) {
  const target = clients.get(data.targetId);
  if (target && target.ws.readyState === WebSocket.OPEN) {
    target.ws.send(JSON.stringify({
      type: 'ice-candidate',
      candidate: data.candidate,
      senderId: clientId
    }));
  }
}

function handleStopStream(clientId) {
  const client = clients.get(clientId);
  if (!client || !client.streamId) return;

  const stream = streams.get(client.streamId);
  if (!stream) return;

  // Notify all viewers
  stream.viewers.forEach(viewerId => {
    const viewer = clients.get(viewerId);
    if (viewer && viewer.ws.readyState === WebSocket.OPEN) {
      viewer.ws.send(JSON.stringify({ type: 'stream-ended' }));
    }
  });

  streams.delete(client.streamId);
  console.log(`[WS] Stream ended: ${client.streamId}`);
}

function handleDisconnect(clientId) {
  const client = clients.get(clientId);
  if (!client) return;

  console.log(`[WS] Client disconnected: ${clientId}`);

  if (client.type === 'streamer' && client.streamId) {
    handleStopStream(clientId);
  } else if (client.type === 'viewer' && client.streamId) {
    const stream = streams.get(client.streamId);
    if (stream) {
      stream.viewers.delete(clientId);

      // Notify streamer that viewer left
      const streamer = clients.get(stream.streamerId);
      if (streamer && streamer.ws.readyState === WebSocket.OPEN) {
        streamer.ws.send(JSON.stringify({
          type: 'viewer-left',
          viewerId: clientId
        }));
      }
    }
  }

  clients.delete(clientId);
}

function getBaseUrl() {
  const port = process.env.PORT || 4001;
  return process.env.PUBLIC_URL || `http://localhost:${port}`;
}

// ------------------------ Start server ------------------------
server.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
  console.log(`📡 WebSocket endpoint: ws://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📺 Active streams: http://localhost:${PORT}/api/streams`);
  console.log(`📝 API Docs: http://localhost:${PORT}/api-docs`);
});
