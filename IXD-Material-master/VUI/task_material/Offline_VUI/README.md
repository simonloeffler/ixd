# Native, Offline Voice User Interface

Bevor Sie DeepSpeech mit NodeJS nutzen können, müssen Sie einige Vorbereitungen treffen:

## Sprachmodelle herunterladen:

Ein englischsprachiges Modell finden Sie im Mozilla Repo:
```
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.7.0/deepspeech-0.7.0-models.pbmm
wget https://github.com/mozilla/DeepSpeech/releases/download/v0.7.0/deepspeech-0.7.0-models.scorer
```

Deutschsprachige Modelle (die öffentlich zugänglich sind) konnte ich nur von der Uni Duisburg-Essen finden:
```
https://github.com/AASHISHAG/deepspeech-german
(hier finden Sie einen Google Drive Download Link)
```

## Mikrofon unter NodeJS nutzen
Um das Mikrofon per NodeJS nutzen zu können wird das [mic NPM](https://github.com/ashishbajaj99/mic) später per package.json installiert. Das Modul mic greift auf das Mikrofon per [sox](http://sox.sourceforge.net/) (Windows/Mac) oder [arecord](http://alsa-project.org/) (Linux) zu. SOX Client kann bspw. per Homebrew Packagemanager (brew install sox) installiert werden.

Mit **playground_microphone_test.js", ein Fork vom Beispiel von [mic NPM Readme](https://github.com/ashishbajaj99/mic), können Sie testen, ob NodeJS auf das Mikrofon zugreifen kann.

Bevor Sie die playground_microphone_test.js ausführen, müssen Sie das mic Modul installieren (Sie können auch gleich alle NPM Package installieren): npm install

## NodeJS DeepSpeech Playground
Die **playground_deepspeech** ist ein Fork von [nodejs_mic_vad_streaming](https://github.com/mozilla/DeepSpeech-examples/tree/r0.7/nodejs_mic_vad_streaming). Im Mozilla Repo finden Sie auch weitere Infos und Beispiele.

In der **playground_deepspeech.js** müssen Sie jetzt noch die Pfade zu Ihrem Sprachmodell anpassen.

Beim Ausführen der JS-Datei kann es sein, dass Sie Ihrem Terminal Zugriff auf das Mikrofon gegeben müssen (unter MacOS in Systemeinstellungen > Sicherheit > Mikrofon > Liste der Programme).

DeepSpeech per NodeJS funktioniert, wenn in der Konsolenausgabe die Amplitude des Mikrofon-Inputs und die Ergebnisse der STT-Engine angezeigt werden.