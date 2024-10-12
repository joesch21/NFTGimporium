import { ethers } from "ethers"; // Already in your package

/**
 * Retrieves the transaction status from the blockchain using ethers.js.
 * @param txId - The transaction hash returned from the `relayTransaction` call.
 * @returns - The transaction receipt or status.
 */
export async function getTransactionStatus(txId: string) {
  try {
    // Assuming you're using a provider like Infura, Alchemy, or Thirdweb
    const provider = new ethers.providers.JsonRpcProvider(process.env.ETH_RPC_URL); // Replace with your provider URL

    // Get the transaction receipt
    const txReceipt = await provider.getTransactionReceipt(txId);

    if (!txReceipt) {
      console.log("Transaction is still pending");
      return "Pending";
    }

    // Checking the status: 1 means success, 0 means failure
    console.log("Transaction Status:", txReceipt.status ? "Success" : "Failure", txReceipt);
    return txReceipt;
  } catch (err: any) {
    console.error("Error fetching transaction status:", err);
    throw new Error(`Failed to retrieve transaction status: ${err.message}`);
  }
}
