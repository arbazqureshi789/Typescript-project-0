//autobind decorator
function autobind(target: any,
     methodName: string , 
     descriptor: PropertyDescriptor
      ){
          const originalMethod= descriptor.value;
          
      }


class ProjectInput {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement : HTMLInputElement;
    descriptionInputElement : HTMLInputElement;
    peopleInputElement : HTMLInputElement;


    constructor() {
        this.templateElement = <HTMLTemplateElement>document.getElementById("project-input")!;
        this.hostElement = <HTMLDivElement>document.getElementById("app")!;

        const importedNode = document.importNode(this.templateElement.content, true);
        // console.log(importedNode);
        this.element = <HTMLFormElement>importedNode.firstElementChild;

        this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title');
        this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description');
        this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people');

        this.configure();
        this.attach();
    }

    private submitHandler(event: Event){
        event.preventDefault();
        console.log(this.titleInputElement.value);
    }

    private configure(){
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const showData = new ProjectInput();


