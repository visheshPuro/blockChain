const SHA256 = require('crypto-js/sha256');

class Block{

	constructor(index, data, timestamp, previousBlockHash = ""){

		this.index = index;
		this.data = data;
		this.previousBlockHash  = previousBlockHash; 
		this.timestamp = timestamp;
		this.hash = this.generateHash();

    }

 
   generateHash(){
 
     return SHA256(this.index + JSON.stringify(this.data) + this.timestamp + this.previousBlockHash ).tiString();

   } 


   
  
}


class BlockChain {
	constructor(){
	   this.chain = [this.createGenisisBlock()];	
	}

	createGenisisBlock(){
      
      return new Block(0, "0", "Genisis Block", "23/02/18");

	}


	getLatestBlock(){

	  return this.chain[this.chain - 1];
	
	}


	addBlock(newBlock){

         newBlock.previousBlockHash = this.getLatestBlock().hash;
         newBlock.hash = newBlock.generateHash();
         this.chain.push(newBlock);
   }


}


let vishesh = new BlockChain();

vishesh.addBlock(new Block(1, "vishesh is here", "25/02/18"))


console.log(JSON.stringify(vishesh, null, 2))