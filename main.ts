import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

import {config } from "./config"
import { bankAbi } from "./abi";
import { Telegram } from "telegram-send";

try {
    const client = createPublicClient({
        chain: sepolia,
        transport: http(),
    });

    client.watchContractEvent({
        address: "",
        abi: bankAbi,        onLogs: (logs) => {
            const messages = logs.map(
                ({ eventName, args }) => `<b>${eventName}</b> <code>${args["account"]}</code> ${formatEther(args["amount"])}`
            );
            
            // Отправка сообщения
            tg.send(messages.join("\n"));
            
            
        }
    });
} catch (error) {
    console.error(error);
    process.exitCode = 1;
}

