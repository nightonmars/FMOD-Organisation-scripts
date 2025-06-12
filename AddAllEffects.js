studio.menu.addMenuItem({
    name: "FMOD Examples ...\\Add Effects",
    isEnabled: function() {
        var event = studio.window.browserCurrent();
        return event && event.isOfExactType("Event");
    },
    execute: function() {
        var event = studio.window.browserCurrent();
        var effectChain = event.masterTrack.mixerGroup.effectChain;

        console.log("Adding all the effects");

        var effects = [
            "ThreeEQEffect",
            "ChannelMixEffect",
            "ChorusEffect",
            "CompressorEffect",
            "ConvolutionReverbEffect",
            "DistortionEffect",
            "DelayEffect",
            "FlangerEffect",
            "GainEffect",
            "LimiterEffect",
            "MultibandEqEffect",
            "PitchShifterEffect",
            "SFXReverbEffect",
            "TransceiverEffect",
            "TremoloEffect",
            "HighpassEffect",
            "HighpassSimpleEffect",
            "LowpassEffect",
            "LowpassSimpleEffect",
            "ParamEqEffect",
            "SpatialiserEffect",
            "ObjectSpatialiserEffect",
            "LoudnessMeter"
        ];

        effects.forEach(function(effect)
        {
            try {
                effectChain.addEffect(effect);
                console.log("Successfully added effect: ${effect}");
            } catch (error) {
                console.error("Failed to add effect: ${effect}", error);
            }
        });

        console.log("All effects processing complete");
    },
});