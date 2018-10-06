
{
"install": {
  "include": [
    "^package\\.json$",
    "^\\.env$"
  ]
},
"restart": {
  "exclude": [
    "^public/",
    "^dist/"
  ],
  "include": [
    "\\.js$",
    "\\.json"
  ]
},
 "throttle": 9000000
}
