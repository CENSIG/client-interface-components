const components = [
 require("./brothersNavigation"),
 require("./explorer"),
 require("./ariane"),
 require("./search")
]

components.forEach(components => components());
