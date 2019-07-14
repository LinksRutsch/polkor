var app = new Vue({
    el: '.app',
    data: {
        badword: null,
        changed: false,
        goodword: null,
        goodwordList: [],
        goodwordIndex: 0,
        submitValue: "Senden",
        wDATA: DATA
    },
    mounted: function(e) {
        this.$refs.baddom.focus();
    },
    methods: {
        onSubmit: function(e) {
            // no bad word entered
            if(!this.badword) {
                this.goodword = "Geben Sie zuerst ein Wort ein.";
                return;
            }
            
            // show user he can hit enter again
            this.submitValue = "⭮ Senden";

            // user input changed
            if (this.changed) {
                this.changed = false;
                this.goodword = null;
                this.goodwordList = [];
                this.goodwordIndex = 0;

                // search for new goodword
                this.goodword = getGoodword(this.badword);
                return;
            }
            
            // badword hasn't changed, user clicked
            // on submit again
            // cycle through the other translations
            if (this.goodwordList.length > 0) {
                if ((this.goodwordIndex + 1) == this.goodwordList.length) {
                    this.goodwordIndex = 0;
                } else {
                    this.goodwordIndex += 1;
                }
                this.goodword = this.goodwordList[this.goodwordIndex];
            }
        }
    },
    watch: {
        badword: function(newW, oldW) {
            this.changed = true;
            this.submitValue = "Senden";
        }
    }
});

function getGoodword(badword) {
    var cat = null;
    for(let i = 0; i < DATA.badword.length; i++) {
        let elem = DATA.badword[i];
        // do we have a match in this category?
        let match = elem.words.some(function(el) {
            return el.toLowerCase() === badword.toLowerCase();
        });
        if (match) {
            cat = elem.cat;
            break;
        }
    }
    
    if (cat !== null && DATA.goodword.hasOwnProperty(cat)) {
        // shuffle corresponding goodwords
        let word_list = DATA.goodword[cat];
        app.goodwordList = shuffle(word_list);
        return app.goodwordList[app.goodwordIndex];
    }
    
    return `Keine Übersetzung gefunden für "${badword}".`;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * https://stackoverflow.com/a/2450976
 * @param {*} array 
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
