# OpenFin.Interop.Win.Sample

This is an example of a Windows Form Application that can:

* Connect to a broker (and application setup as an Interop Broker e.g. OpenFin Workspace https://www.openfin.co/workspace/)
* Create a broker (which others can connect to)
* Fetch the list of contextual groups/channels from the current broker
* Listen for contextual changes
* Join a contextual group
* Leave the current contextual group
* Update the current context against the currently joined contextual group
* Creating and receiving an instrument context

This application can be have multiple instances so that one can be the broker while the others connect to it (just provide a custom broker name and the Create Broker button will be enabled).

<a href="https://www.loom.com/share/841e05c225024ca6a44324f18fc3ed4d">
    <p>Interop Instrument Example Tool - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/841e05c225024ca6a44324f18fc3ed4d-with-play.gif">
  </a>
