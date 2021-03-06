db.application.remove()

db.broadcast.remove()
db.broadcast.insert({ "_id" : 1, "text" : "GVM version 0.8.4 release!" })
db.broadcast.insert({ "_id" : 2, "text" : "In this release:" })
db.broadcast.insert({ "_id" : 3, "text" : " * gvm current without candidate (thanks Matt Hurne!)" })
db.broadcast.insert({ "_id" : 4, "text" : " * bug fixes" })
db.broadcast.insert({ "_id" : 5, "text" : " * internal optimisations and improvements" })
db.broadcast.insert({ "_id" : 6, "text" : " * licensed under the Apache 2.0 License" })
db.broadcast.insert({ "_id" : 7, "text" : " * remove dependency on zip" })
db.broadcast.insert({ "_id" : 8, "text" : " * upgrade to Gradle 1.3" })
db.broadcast.insert({ "_id" : 9, "text" : " * improvements on build process" })
db.broadcast.insert({ "_id" : 10, "text" : "" })
db.broadcast.insert({ "_id" : 11, "text" : "As always, please report any issues at:" })
db.broadcast.insert({ "_id" : 12, "text" : " https://github.com/gvmtool/gvm/issues" })
