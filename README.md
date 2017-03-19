# one-from-each
Get all possibilities taking one value for each key ( from an array of vals for that key )

#### Input :
```json
{ 
    "key1" : ["val1", "val2"],
    "key2" : ["val1"]
}
```

#### Output :
```json
[
    {
        "key1" : "val1",
        "key2"  : "val1"
    },
    {
        "key1" : "val2",
        "key2"  : "val1"
    }
]
```
                