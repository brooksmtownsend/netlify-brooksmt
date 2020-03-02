import {instantiateStreaming} from "@assemblyscript/loader";

export default instantiateStreaming(fetch("./wasm/optimized.wasm", {
    headers: {
        'accept': "application/wasm",
    }
}));