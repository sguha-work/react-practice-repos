const StatusCode = {
    "post": {
        "ok": 200,
        "created": 201,
        "accepted": 202,
        "see-other": 303
    },
    "get": {
        "ok": 200,
        "no-content": 204,
        "partial-content": 206,
        "multiple-choice": 300,
        "permanaent-redirect": 308,
        "not-modified": 304,
        "temporary-redirectet": 307
    },
    "put": {
        "ok": 200,
        "no-content": 204,
        "accepted": 202
    },
    "update": {
        "ok": 200,
        "no-content": 204,
        "accepted": 202
    },
    "delete": {
        "ok": 200,
        "no-content": 204,
        "accepted": 202
    }
}
export default StatusCode;