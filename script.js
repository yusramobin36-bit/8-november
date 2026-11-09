let erum=['cooking','cleaning','stitching','washing','maintaining schedule']
for (let i=0 ; i<erum.length ; i++)
{console.log (erum[i])
    }
    let erum2=erum.slice (3)
console.log(erum2)



erum.pop()
console.log(erum)
erum.push("peeling")
console.log(erum)
erum.shift()
console.log(erum)
erum.unshift("relaxing","giving comfort")
console.log(erum)

erum.splice(1,4)
console.log(erum)