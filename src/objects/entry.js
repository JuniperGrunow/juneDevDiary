class Entry{
    
    postedOn;
    body;
    tags=[];
    images=[];
    edited;

    constructor(){
        postedOn = new Date.now();
        edited=false;
    }

    setBody(body){
        this.body=body;
    }

    getBody(){
        return this.body;
    }

    addTag(tag){
        var i = 0;
        while(i < this.tags.length){
            if(tags[i]===tag){
                return false;
            }
            i++;
        }
        this.tags.push(tag);
        return true;
    }

    removeTag(tag){
        var i = 0;
        while(i < this.tags.length){
            if(this.tags[i]===tag){
                this.tags.splice(i,i-1);
                return true;
            }else{
                i++
            }
        }
        return false;
    }

    getTags(){
        return tags;
    }

    async addImage(imagePath,projectName){
        const fs =require('fs').promises;
        const destination = "./projects/"+projectName+"/entries/"+this.postedOn.toString;
        temp = imagePath.split(".");
        fileType = temp[temp.length-1];
        try{
            await fs.access(imagePath);

            await fs.mkdir(destination);

            await fs.copyFile(imagePath,destination+"/image"+this.images.length+"."+fileType);

            this.images.push(destination+"/image"+this.images.length+"."+fileType);

            return true;
        }catch (err){
            try{
                await fs.unlink(destination+"/image"+this.images.length+"."+fileType);
            }catch(e){
                throw e;
            }
            console.log(Date.now.toString+":Unable to image:"+err.toString);
            return false;
        }
    }


}
