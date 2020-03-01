import {instantiateStreaming} from "@assemblyscript/loader";

// let wasm = async () => {
//     const response = await fetch("../build/optimized.wasm");
//     const buffer = await response.arrayBuffer();
//     return await instantiate(buffer);
// }

export default instantiateStreaming(fetch("./wasm/optimized.wasm", {
    headers: {
        'accept': "application/wasm",
    }
}));