class Project{
    resources=[];
    entries=[];
    projectName;
    createdOn;
    lastUpdated;
    tags=[];
    languages=[];
    constructor(){
        this.projectName="Empty Project";
        this.createdOn= new Date().now;
        this.lastUpdated = new Date().now;
    }
}