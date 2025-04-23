studio.menu.addMenuItem({
    name: "FMOD Examples ...\\Create 3D Event",
    execute: function() {
        var assets = studio.window.browserSelection()

        if (assets.length == 0)
        {
            alert("Please select one or more assets")
            return
        }
        if (assets[0].entity != "AudioFile")
        {
            alert("Please select assets")
            return
        }

        var eventName = studio.system.getText("Event Name", "Name")
        if (eventName == null)
        {
            alert("Error when assigning name")
            return
        }
        if (eventName.length == 0)
        {
            alert("Invalid event name")
            return;
        }

        var event = studio.project.create("Event");
        event.name = eventName;
        event.masterTrack.mixerGroup.effectChain.addEffect("SpatialiserEffect")

        var track = studio.project.create("GroupTrack")
        track.mixerGroup.output = event.mixer.masterBus;
        track.mixerGroup.name = "Audio Track";
        event.relationships.groupTracks.add(track);

        var longest = 0
        assets.forEach(function(asset)
        {
            if (asset.length > longest)
            {
                longest = asset.length
            }
        })

        if (assets.length > 1)
        {
            var multiInstrument = track.addSound(event.timeline, 'MultiSound', 0, longest)
            assets.forEach(function(asset)
            {
                var instrument = studio.project.create("SingleSound")
                instrument.audioFile = asset
                instrument.owner = multiInstrument
            })
        }
        else
        {
            var instrument = track.addSound(event.timeline, "SingleSound", 0, assets[0].length)
            instrument.audioFile = assets[0]
        }
        console.log("Created Event!")
    },
    keySequence: "Ctrl+H",
});