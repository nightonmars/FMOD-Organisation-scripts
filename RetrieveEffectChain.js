studio.menu.addMenuItem({
    name: "FMOD Examples ...\\Find effect chains",
    execute: function() {
        var event = studio.window.browserCurrent();

        if (event.entity === "Event") {
            var effects = event.masterTrack.mixerGroup.effectChain.effects;
            if (effects.length <= 1)
            {
                console.log("Only found 1 effect which may be the fader");
                return;
            }
            var foundEffectChain = false
            effects.forEach(function(effect)
            {
                if (effect.entity == "ProxyEffect")
                {
                    var subChain = effect.preset.effect.effects;
                    if (subChain != null)
                    {
                        console.log("Found an effect chain");
                        foundEffectChain = true;
                        subChain.forEach(function(subEffect)
                        {
                            console.log(subEffect);
                        })
                        console.log("End of the effect chain");
                    }
                }
            })

            if (!foundEffectChain)
                console.log("Could not find an effect chain");
        }
        else
        {
            console.log("Please select an event");
        }
    }
});