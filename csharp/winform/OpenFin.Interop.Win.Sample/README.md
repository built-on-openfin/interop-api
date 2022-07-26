# OpenFin.Interop.Win.Sample

This is an example of a Windows Form Application that can:

* Connect to a broker (an application setup as an Interop Broker e.g. OpenFin Workspace https://www.openfin.co/workspace/)
* Create a broker (which others can connect to)
* Fetch the list of contextual groups/channels from the current broker
* Listen for contextual changes
* Join a contextual group
* Leave the current contextual group
* Update the current context against the currently joined contextual group
* Creating and receiving an instrument context

This application can be have multiple instances so that one can be the broker while the others connect to it (just provide a custom broker name and the Create Broker button will be enabled).
