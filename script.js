document.getElementById('workoutForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // メッセージエリアをクリア
  document.getElementById('response').innerText = '';
  
  var date = document.getElementById('date').value;
  var weight = document.getElementById('weight').value;
  var reps = document.getElementById('reps').value;
  var type = document.querySelector('input[name="type"]:checked').value;
  
  var formData = new FormData();
  formData.append('type', type);
  formData.append('date', date);
  formData.append('weight', weight);
  formData.append('reps', reps);
  
<!--Google Apps ScriptのウェブアプリURLを指定します-->
  fetch('https://script.google.com/macros/s/AKfycbw7qLUoQQy6a7aUj-Sp0SqNOn7sAoHmgXcOZTpcuE2NhM98EZAe1JAT18FpVot9cKFX/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      document.getElementById('response').innerText = "データが正常に送信されました。";
    } else {
      document.getElementById('response').innerText = "エラーが発生しました: " + data.message;
    }
  })
  .catch(error => {
    document.getElementById('response').innerText = 'エラーが発生しました: ' + error.message;
  });
});
