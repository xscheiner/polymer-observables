namespace Century {

  @component("observable-header")
  export class ObservableHeader extends polymer.Base {

    @property({ type: String, value: "Observables header", reflectToAttribute: true })
    public title: string;

    public addObserver(propName: string, handler: Function): void {
      let observer: any = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          const changes = { oldValue: mutation.oldValue, newValue: mutation.target.attributes[mutation.attributeName].value};
          handler(changes);
        });
      });
      observer.observe(this, {
        attributes: true,
        childList: true,
        characterData: true,
        attributeOldValue: true
      });
    }
  }

  ObservableHeader.register();
}
