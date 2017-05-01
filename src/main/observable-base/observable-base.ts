namespace Century {

  @component("observable-base")
  export class ObservableBase extends polymer.Base {

    @property({ type: String, value: "Observables base" })
    public baseContent: string;

    private headerObj: ObservableHeader;

    public attached(): void {
        this.headerObj = document.getElementById("obsHeader") as ObservableHeader;
        console.log(this.headerObj);
        this.headerObj.addObserver("title", this.titleChange.bind(this));
    }

    private titleChange(changes: any): void {
        // console.log("the title is: ", title);
        this.set("baseContent", changes.newValue);
    }
  }

  ObservableBase.register();
}