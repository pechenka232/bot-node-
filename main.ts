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
        address: "0xa0c709229c0bED1Ffb2801D9a250db8aFb5c92cC",
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

//2997617
//7536598316:AAGfyNGOdpogkIagbXxx2KM7xAiIMSoIhh0