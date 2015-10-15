/**
*
* This function is used to compress the picture in javascript.
*
**/

function Compress(data,width,height,ratio){
	this.data = data
	this.height = height
	this.width = width
	console.log(data)
	if(ratio === undefined){
       	ratio = 0.6;
    }
	this.ratio = ratio;

}

Compress.prototype.doCompress = function(callback) {
	// body...
	img    = new Image()

	canvas = document.createElement("canvas")
	canvas.width  = this.width
	canvas.height = this.height

	canvasCopy = document.createElement("canvas")
	canvasCopy.width  = this.width*this.ratio
	canvasCopy.height = this.height*this.ratio 

	context     = canvas.getContext('2d')
	contextCopy = canvasCopy.getContext('2d')

	
	img.onload = function(){
		context.drawImage(this,0,0)
		contextCopy.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,canvasCopy.width,canvasCopy.height)
		data = canvasCopy.toDataURL("image/jpeg",1.0)
		callback(data)
	}
	img.src = this.data
	
}