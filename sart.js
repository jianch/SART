/* url parameters*/
var id = jsPsych.data.getURLVariable("id");
var debrifurl = "jianchen.info?id=".concat(id) // redirected to another task


document.body.style.backgroundColor = 'black'; 
document.body.style.color = 'white'; 


// create timeline
var timeline = [];

var respKey = 'space';

// introduction I 
var instructionsI = {
  type: "html-keyboard-response",
  stimulus: "<p><div '>" + 
  "Welcome to SART task!</p>" +
  "In this study you will be shown a stream of single digits (1-9) in varying sizes in the middle of the screen.</p>"+
  "Each digit is only presented for a short duration and is immediately covered by a crossed circle.</p>" +
    "<p>Press the SPACEBAR when you see any digit other than 3.</p> " +
    "Press NO key when you see digit 3. Just wait for the next digit. " +
    " </div></p><div style = 'color: #CC0000;'>Press the SPACEBAR to start </div></p>",
    choices: ['space'],
  post_trial_gap: 500
};



// introduction II 
var instructionsII = {
  type: "html-keyboard-response",
  stimulus: "<p><div '>For example, if you see the number <strong>1</strong>, press the <strong>SPACEBAR</strong>.</p> " +
     "<p>If you see the number <strong>4</strong>, press the <strong>SPACEBAR</strong>.</p>" +
     "<p>If you see the number <strong>3</strong>, <strong>do not press</strong> the SPACEBAR.</p>" +
     "<p>If you see the number <strong>7</strong>, press the <strong>SPACEBAR</strong>.</p>" +
     "<p>Try to be as fast as possible without making mistakes.</p></div>" +
     "<p><div style='color: #CC0000;'>Press SPACEBAR to start training.</div></p>",
    choices: ['space'],
  post_trial_gap: 500
};



// Built the main task instructions
var instructionsRecall = {
  type: "html-keyboard-response",
  stimulus: "<p>You will now start the task.</p>" + 
            "<p>It will take about five minutes to complete this task without any rests.</p>"+
            "<p>The same instructions apply.</p>" +
            "<p>Press the SPACEBAR when you see any digit other than 3.</p> " +
            "Press NO key when you see digit 3. Just wait for the next digit. </p>" +
            "<p>Try to be as fast as possible without making a mistake.</p>"+
            "<p><div style='color: #CC0000;'>Press SPACEBAR to start the experiment.</div></p>",
  choices: ['space'],
  post_trial_gap: 500
}


var stimuli_prac = [
        {number: 1, correct_response: ['space'], condition: 'Go', fontsize: 48},
        {number: 8, correct_response: ['space'], condition: 'Go', fontsize: 94},
        {number: 4, correct_response: ['space'], condition: 'Go', fontsize: 120},
        {number: 3, correct_response: [''], condition: 'NoGo', fontsize: 72},
        {number: 7, correct_response: ['space'], condition: 'Go', fontsize: 100},
        {number: 5, correct_response: ['space'], condition: 'Go', fontsize: 120},
        {number: 3, correct_response: [''], condition: 'NoGo', fontsize: 48},
        {number: 9, correct_response: ['space'], condition: 'Go', fontsize: 72},
        {number: 2, correct_response: ['space'], condition: 'Go', fontsize: 100},
        {number: 1, correct_response: ['space'], condition: 'Go', fontsize: 48},
        {number: 8, correct_response: ['space'], condition: 'Go', fontsize: 94}
      ]
      
      
      

var stimuli_test = [
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 94
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 120
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 94
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 120
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 94
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 72
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 4,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 9,
    condition: "Go",
    fontsize: 48
  },
  {
    number: 1,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 5,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 7,
    condition: "Go",
    fontsize: 72
  },
  {
    number: 2,
    condition: "Go",
    fontsize: 100
  },
  {
    number: 6,
    condition: "Go",
    fontsize: 120
  },
  {
    number: 8,
    condition: "Go",
    fontsize: 94
  },
  {
    number: 3,
    condition: "NoGo",
    fontsize: 48
  }
]



// Create the task
var mask = {
    type: 'image-keyboard-response',
    stimulus: 'img/mask.png',
    trial_duration: 900,
    choices: function(){
      var last_number_key_pressed = jsPsych.data.getLastTrialData().values()[0].key_press;
      if (last_number_key_pressed == 32){return ['none'];} else {return ['space'];}
    },
    trial_duration: function(){
      var last_number_rt = jsPsych.data.getLastTrialData().values()[0].rt;
      if(last_number_rt > 0){return 1150-last_number_rt;} else {return 900;}
    },
    response_ends_trial: false,
    
    data: {
       conditions: function(){
      	return jsPsych.data.get().last(1).select('conditions').values[0];
    	}
    },
    
    
    on_finish: function(data){
      var max_rt = jsPsych.data.get().last(2).select('rt').max();
      
      if(data.key_press == "null"){data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter();} else {data.key_press =data.key_press;}
      // data.key_press = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter();
      var max_key_press = jsPsych.data.get().last(2).select('key_press').max();
      data.trial_key_press = max_key_press;
      
      console.log(jsPsych.data.get().select('key_press').max())
      console.log(jsPsych.data.get().last(2).select('conditions').values)
      console.log(max_key_press)
      
      var current_rt = data.rt;
      // Si on a répondu pendant le mask
      if (current_rt >0){
        data.rt = current_rt+250;data.trial_rt=max_rt+250;}else{
        data.rt = 0;data.trial_rt=max_rt;}
      if(data.conditions == "Go"){
        data.trial_correct = jsPsych.pluginAPI.compareKeys(max_key_press, 32);
        data.correct = jsPsych.pluginAPI.compareKeys(max_key_press, 32);
      } else {
        data.trial_correct = jsPsych.pluginAPI.compareKeys(max_key_press, 0);
        data.correct = jsPsych.pluginAPI.compareKeys(max_key_press, 0);
      }
    }
  };

// Built the stimulus
    var number = {
      type: 'html-keyboard-response',
      stimulus: function() {
        return '<p style="font-size: '+jsPsych.timelineVariable('fontsize', true)+'px;">'+jsPsych.timelineVariable('number', true)+'</p>';
      },
      choices: ['space'],
      trial_duration: 250,
      
      data: {
        conditions: jsPsych.timelineVariable('condition'),
      },
      on_finish: function(data){
        if(data.conditions == 'Go'){
          data.correct = jsPsych.pluginAPI.compareKeys(data.key_press, 32);
        } else {
          data.correct = jsPsych.pluginAPI.compareKeys(data.key_press, 0);
        }
        console.log(jsPsych.data.get().select('conditions').values[0])
      }
    };

    var feedback = {
    	type: 'html-keyboard-response',
      trial_duration: 400,
    	stimulus: function(){
    		var last_trial_correct = jsPsych.data.get().last(1).values()[0].trial_correct;
    		if(last_trial_correct){
    			return ""
    		} else {
    			return "<p style='font-size:30px; color: red;'>Incorrect!</p>"
    		}
    	},
    };


      
// Create the practice phase
var practice = {
  timeline: [number, mask, feedback],
  timeline_variables: stimuli_prac,
  choices: ['space'],
  // trial_duration: 250,
  data: {
    'test_part': 'practice'
  },
    on_start: function(data){
      document.body.style.cursor = 'none';
    },
    on_finish: function() {
      jsPsych.data.displayData('csv');
    }
};

  // Create a debrief feedback for practice phase
var debrief_block = {
      type: "html-keyboard-response",
      choices: ['space'],
      stimulus: function(){
        // On crée la variable trials en allant chercher les données enregistrées avec jsPsych.data.get()
        // .filter({test_part: 'test'}) permet de ne prendre que les données associées au test
        var trials_Go = jsPsych.data.get().filter({test_part: 'practice', conditions: 'Go', stimulus: 'img/mask.png'});
        var trials_NoGo = jsPsych.data.get().filter({test_part: 'practice', conditions: 'NoGo', stimulus: 'img/mask.png'});
        var correct_Go = trials_Go.filter({correct: true});
        var incorrect_Go = trials_Go.filter({correct: false});
        var correct_NoGo = trials_NoGo.filter({correct: true});
        var incorrect_NoGo = trials_NoGo.filter({correct: false});
        var accuracy_Go = Math.round(correct_Go.count()/trials_Go.count()*100);
        var unaccuracy_Go = Math.round((trials_Go.count()-correct_Go.count())/trials_Go.count()*100);
        var rt = Math.round(correct_Go.select('trial_rt').mean());
        // For incorrect trials
        var accuracy_NoGo = Math.round(correct_NoGo.count()/trials_NoGo.count()*100);
        var unaccuracy_NoGo = Math.round(incorrect_NoGo.count()/trials_NoGo.count()*100);
        return "<p><div'>Correct Go: <u>"+accuracy_Go+"</u>% of trials.</p>"+
        "<p>Your average reaction time is <u>"+rt+"</u> ms.</p>"+
        "<p>Incorrect Go: <u>"+unaccuracy_Go+"</u>% of trials.</p>"+
        "<p>Correct NoGo: <u>"+accuracy_NoGo+"</u>%</p>"+
        "<p>Incorrect NoGo: <u>"+unaccuracy_NoGo+"</u>%</p>"+
        "<p><div style = 'color: #CC0000;'>Press the <strong>SPACEBAR</strong> key to start the task.</div></p>";
      }
    };

    // Create a debrief feedback for test phase only for debug purpose
      var debrief_block_test = {
        type: "html-keyboard-response",
        choices: ['space'],
        stimulus: function(){
          // On crée la variable trials en allant chercher les données enregistrées avec jsPsych.data.get()
          // .filter({test_part: 'test'}) permet de ne prendre que les données associées au test
          var trials_Go = jsPsych.data.get().filter({test_part: 'test', conditions: 'Go', stimulus: 'img/mask.png'});
          var trials_NoGo = jsPsych.data.get().filter({test_part: 'test', conditions: 'NoGo', stimulus: 'img/mask.png'});
          var correct_Go = trials_Go.filter({correct: true});
          var incorrect_Go = trials_Go.filter({correct: false});
          var correct_NoGo = trials_NoGo.filter({correct: true});
          var incorrect_NoGo = trials_NoGo.filter({correct: false});
          var accuracy_Go = Math.round(correct_Go.count()/trials_Go.count()*100);
          var unaccuracy_Go = Math.round((trials_Go.count()-correct_Go.count())/trials_Go.count()*100);
          var rt = Math.round(correct_Go.select('trial_rt').mean());
          // For incorrect trials
          var accuracy_NoGo = Math.round(correct_NoGo.count()/trials_NoGo.count()*100);
          var unaccuracy_NoGo = Math.round(incorrect_NoGo.count()/trials_NoGo.count()*100);
          return "<p><div style='font-size:30px;'>Correct Go : <u>"+accuracy_Go+"</u>% des essais.</p>"+
          "<p>Votre temps de réaction moyen est de <u>"+rt+"</u>ms.</p>"+
          "<p>Incorrect Go <u>"+unaccuracy_Go+"</u>% des essais.</p>"+
          "<p>Correct NoGo <u>"+accuracy_NoGo+"</u>%</p>"+
          "<p>Incorrect NoGo <u>"+unaccuracy_NoGo+"</u>%</p>"+
          "<p><div style = 'color: #CC0000;'>Appuyez sur la touche <strong>ENTRÉE</strong> pour commencer la tâche.</div></p>";
        }
      }




// Create the test phase
var test = {
  timeline: [number, mask],
  timeline_variables: stimuli_test,
  data: {
    'test_part': 'test'
  }
};



var distraction_probe = {
  type: 'html-button-response',
  stimulus: '<p>Distraction</p>',
  choices: ['Yes', 'No'],
  prompt: "<p>Were you distracted during the task?</p>",
  on_start: function(data){
      document.body.style.cursor = '';
    }
};

var if_distracted = {
  type: 'survey-text',
  questions: [
    {prompt: "Briefly describe the distraction: "}
  ],
};

var if_node = {
  timeline: [if_distracted],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0];
    if(data.button_pressed == 1){
      return false;
    } else {
      return true;
    }
  }
};



// timeline.push({
//   type: 'fullscreen',
//   fullscreen_mode: true
// });

timeline.push(instructionsI);
timeline.push(instructionsII);
timeline.push(practice);
timeline.push(debrief_block);
timeline.push(instructionsRecall);
timeline.push(test);
// timeline.push(debrief_block_test);
timeline.push(distraction_probe);
timeline.push(if_node);

timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false,
  on_finish: function(data){
    document.body.style.cursor = '';}
});



jsPsych.init({
  timeline: timeline,
  on_finish: function(){
    window.location.href = debrifurl;
  },
})
