import { env } from "@/config";
import { Pinecone } from "@pinecone-database/pinecone";

// Initialize index and ready to be accessed.
async function initPineconeClient() {
  try {
    const pineconeClient = new Pinecone({
      apiKey: env.PINECONE_API_KEY,
    });
    await pineconeClient.createIndex({
      name: env.PINECONE_INDEX_NAME,
      dimension: 1536,
      metric: "cosine",
      spec: {
        serverless: {
          cloud: "aws",
          region: "us-east-1",
        },
      },
      suppressConflicts: true,
      waitUntilReady: true,
    });
    return pineconeClient;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to initialize Pinecone Client");
  }
}

export async function getPineconeClient() {
  const pineconeClientInstance = await initPineconeClient();
  return pineconeClientInstance;
}
