# TechTalk Addon

## Beschreibung
Dieses Firefox Addon klinkt sich in die Men�leiste des Browser und
besitzt au�ergew�hnliche Funktionen.


## Was braucht man zum Entwickeln

...einen Plan wies funktioniert:
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Getting_started

...und das Firefox Addon SDK
https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation


## Wie benutze ich das Addon

1. Zuerst das Addon SDK �ber die Konsole aktivieren

    cd bin

    activate

2. Anschlie�end in den Projektfolder wechseln und mit cfx ein .xpi generieren

    cfx xpi

3. "Doppelklick" auf die .xpi-Datei oder "Open File" im Browser und das Addon ist installiert


## Das Addon Konfigurieren

1. about:config im browser aufrufen und ein property f�r "techtalk.email" definieren. Voila!