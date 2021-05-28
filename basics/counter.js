
class Counter {
    value = 0;

    add(i){
        this.value += i;
    }

    inc(){
        console.log('this ' + this)
        this.value += 1;
    }

    weirdInc() {
        const waird = () => {
            this.value += 1;
        }
        let self = this;
        (function(){
           self += 1
        })();
    }

    superInc = () => {
        console.log('this ' + this)
        this.value += 1;
    }
}

const c1 = new Counter();

c1.add(5)
c1.add(7)
console.log(c1.value)

// Pas bon
setTimeout(c1.inc, 500)

// Bon
setTimeout(function() {
    c1.inc()
}, 500)

setTimeout(function() {
    console.log(c1.value)
}, 1000)

c1.inc.bind({})()
console.log(c1.value);

c1.inc.bind(c1)()
console.log(c1.value);

c1.weirdInc();
console.log(c1.value)