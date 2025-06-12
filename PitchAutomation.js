studio.menu.addMenuItem({
    name: "Examples\\Add Pitch Automation",
    isEnabled: function() { var event = studio.window.browserCurrent(); return event && event.isOfExactType("Event"); },
    execute: function() {
        var event = studio.window.browserCurrent();
        var mixerGroup = event.masterTrack.mixerGroup;

        var automator = mixerGroup.addAutomator("pitch");

        var curve = automator.addAutomationCurve(event.timeline);

        curve.addAutomationPoint(0.0, 0);     // 0s, 0 semitones
        curve.addAutomationPoint(0.5, 12);    // 0.5s, +12 semitones
        curve.addAutomationPoint(1.0, 0);     // 1.0s, back to 0
    }
})