studio.menu.addMenuItem({
    name: "FMOD Examples ...\\Find Duplicate Audio Files",
    execute: function () {
        var banks = studio.project.model.Bank.findInstances();
        var audioFileMap = {};

        function trackAudioFile(audioFile, bankName) {
            if (!audioFile) return;

            var key = audioFile.id;
            if (!audioFileMap[key]) {
                audioFileMap[key] = {
                    name: audioFile.assetPath,
                    banks: []
                };
            }

            if (audioFileMap[key].banks.indexOf(bankName) === -1) {
                audioFileMap[key].banks.push(bankName);
            }
        }

        function extractAudioFromInstrument(instrument, bankName) {
            if (!instrument) return;

            if (instrument.audioFile) {
                trackAudioFile(instrument.audioFile, bankName);
            }

            if (instrument.sounds) {
                instrument.sounds.forEach(function (subInstrument) {
                    extractAudioFromInstrument(subInstrument, bankName);
                });
            }

            if (instrument.sound) {
               extractAudioFromInstrument(instrument.sound, bankName)
            }

            if (instrument.event) {
                var subEvent = instrument.event;
                if (subEvent.groupTracks) {
                    subEvent.groupTracks.forEach(function (track) {
                        if (track.modules) {
                            track.modules.forEach(function (mod) {
                                if (mod) {
                                    extractAudioFromInstrument(mod, bankName);
                                }
                            });
                        }
                    });
                }
            }
        }

        banks.forEach(function (bank) {
            var events = bank.events;
            events.forEach(function (event) {
                if (!event.groupTracks) return;
                event.groupTracks.forEach(function (track) {
                    if (!track.modules) return;

                    track.modules.forEach(function (module) {
                        if (module) {
                            extractAudioFromInstrument(module, bank.name);
                        }
                    });
                });
            });
        });

        console.log("=== Identified Audio Files ===");
        Object.keys(audioFileMap).forEach(function (key) {
            var entry = audioFileMap[key];
            if (entry.banks.length > 1) {
                console.log("Audio File: " + entry.name + " used in banks: " + entry.banks.join(", "));
            }
        });
    }
});
