//hidismo ascunde portiunea unde se afla poza pana cand ii dam draw pe canvas
function hidismo() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}


// ascundem butonul de "fa poza" pana cand isi porneste camera
function show_snap() {
  document.getElementById('snap').removeAttribute('disabled');

}
// ascundem butonul de stop camera pana cand face poza
function show_stop() {
  document.getElementById('stop-video').removeAttribute('disabled');
}




// oprire camera
function stop() {
  window.stream.getTracks().forEach(function (track) {
    track.stop();
  });
}

// intrebare permisiuni utilizare camera
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia({
    video: true
  },
    cha, videoError);
}

function videoError(e) {

}

// detectare device-uri on click
function cha() {
  console.log("cha");

  const videoElement = document.querySelector('video');
  const videoSelect = document.querySelector('select#videoSource');


  navigator.mediaDevices.enumerateDevices()
    .then(gotDevices).then(getStream).catch(handleError);
  videoSelect.onchange = getStream;


  function gotDevices(deviceInfos) {
    for (let i = 0; i !== deviceInfos.length; ++i) {
      const deviceInfo = deviceInfos[i];
      const option = document.createElement('option');
      option.value = deviceInfo.deviceId;
      if (deviceInfo.kind === 'videoinput') {
        option.text = deviceInfo.label || 'camera ' +
          (videoSelect.length + 1);
        videoSelect.appendChild(option);
      } else {
        console.log('Found another kind of device: ', deviceInfo);
      }
    }
  }

  function getStream() {
    if (window.stream) {
      window.stream.getTracks().forEach(function (track) {
        track.stop();
      });
    }

    const constraints = {
      video: {
        deviceId: { exact: videoSelect.value }
      }
    };
    /*
	 * navigator.mediaDevices.getUserMedia(constraints).
	 * then(gotStream).catch(handleError);
	 */
  }

  function gotStream(stream) {
    window.stream = stream; // make stream available to console
    videoElement.srcObject = stream;
  }

  function handleError(error) {
    console.error('Error: ', error);
  }
  if (window.stream) {
    window.stream.getTracks().forEach(function (track) {
      track.stop();
    });
  }


}

// detectare on load

const videoElement = document.querySelector('video');
const videoSelect = document.querySelector('select#videoSource');


navigator.mediaDevices.enumerateDevices()
  .then(gotDevices).then(getStream).catch(handleError);
videoSelect.onchange = getStream;


function gotDevices(deviceInfos) {
  for (let i = 0; i !== deviceInfos.length; ++i) {
    const deviceInfo = deviceInfos[i];
    const option = document.createElement('option');
    option.value = deviceInfo.deviceId;
    if (deviceInfo.kind === 'videoinput') {
      option.text = deviceInfo.label || 'camera ' +
        (videoSelect.length + 1);
      videoSelect.appendChild(option);
    } else {
      console.log('Found another kind of device: ', deviceInfo);
    }
  }
}

function getStream() {
  if (window.stream) {
    window.stream.getTracks().forEach(function (track) {
      track.stop();
    });
  }

  const constraints = {
    video: {
      deviceId: { exact: videoSelect.value }
    }
  };
  /*
	 * navigator.mediaDevices.getUserMedia(constraints).
	 * then(gotStream).catch(handleError);
	 */
}

function gotStream(stream) {
  window.stream = stream; // make stream available to console
  videoElement.srcObject = stream;
}

function handleError(error) {
  console.error('Error: ', error);
}


// pornire camera on click
function start_cam() {



  const videoElement = document.querySelector('video');
  const videoSelect = document.querySelector('select#videoSource');
  const constraints = {
    video: {
      deviceId: { exact: videoSelect.value }
    }
  };

  navigator.mediaDevices.getUserMedia(constraints).
    then(gotStream).catch(handleError);

  errBack = function (error) {
    console.log("Video capture error: ", error.code);
  };


  if (navigator.getUserMedia) { // Standard
    navigator.getUserMedia(constraints, function (stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(constraints, function (stream) {
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
var snapy1 = "";
// avem valoarea imaginii sub forma base64 in variabila inpHidden, ea trebuie
// convertita pe partea de backend in jpg/png
document.getElementById("snap").addEventListener("click", function () {
  snapy1 = "true";
  console.log(snapy1);
  context.drawImage(video, 0, 0, 640, 480);
  var inpHidden = document.getElementById("canvas");
  inpHidden.value = canvas.toDataURL("image/jpeg");
  console.log(inpHidden.value);
  document.getElementById("captured_image").value = inpHidden.value;
});



var inpHidden = document.getElementById("canvas");
inpHidden.value = canvas.toDataURL("image/jpeg");

if (snapy1 == "true") {
  var pozavar2 = inpHidden.value;
}
else {
  var pozavar2 = "";
}