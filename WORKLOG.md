# 03-01-2017
Use PouchDB for front end, which requires Pouch/Couch on the server too.
First, create a unit test to make sure response won't change, then replace
rethinkdb with pouch/couch.
- Merges
- Object references
- Couch or Pouch on server?

I think data will be stord as is. While creating a view to replicate /workouts mergings

### I need pouch because
- Need to persist data in AsyncStorage using a wrapper
- Pouch is very good and has a bonus of syncing with couch server

### Why not the more comprehensive RxDB?
- RxDB is just wrapper for pouch plus many plugins. I can pick whatever plugins
I want

### Replicate rethinkdb
could I use pouch-find to solve them all instead of messing with indexes?
- [x] Insert docs into database
- [x] Add type
- [x] Replicate to react side, make queries there
- [ ] Filtered replication to avoid sending secret data to the client https://github.com/stockulus/pouchdb-react-native/issues/12
- [ ] Merge movement into workout
- [ ] Extract movements and equipments
- [ ] Filter results by movement, equipment, and name
- [ ] db auth

### Use Couch as a backend!
perhaps take it a step further and make sure all front end quries are Views
