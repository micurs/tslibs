import * as React from 'react';

// ================================= <Input> =================================

export interface MyInputProps {
  id: string;
  label: string;
  value: string;
}

export interface MyInputState {
  value: string;
}

export class MyInput extends React.Component<MyInputProps,MyInputState> {
  constructor( p: MyInputProps) {
    super(p);
    this.state = {
      value: p.value,
    };
  }

  public render() {
    const { id, label } = this.props;
    return <div id={id}>
      <label htmlFor={`input-${id}`}>{label}</label>
      <span> </span>
      <input id={`input-${id}`} type="text" name={id} value={this.state.value} onChange={this.handleChange} />
    </div>;
  }

  private handleChange = ( e: any ) => {
    this.setState( { value: e.target.value } );
  }

}
