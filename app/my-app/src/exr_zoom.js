import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
class Picture extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            height:this.props.height,
            width:this.props.width,
            src:this.props.src
        }
    }
    ZoomIn=()=>{
        this.setState({
            height:this.state.height*1.25,
            width:this.state.width*1.25
        });
    }
    ZoomOut=()=>{
        this.setState({
            height:this.state.height*0.75,
            width:this.state.width*0.75
        });
    }
    Reset=()=>{
        this.setState({
            src:this.state.src='https://picsum.photos/100?random'
        });
    }
    render()
    {
        var output=(
            <div className='col-6 mb-3'>
                <img height={this.state.height} width={this.state.width} src={this.state.src} className='img-fluid'/><br/>
                <button className='btn btn-success mt-2'onClick={this.ZoomIn}>ZoomIn</button>&nbsp;
                <button className='btn btn-success mt-2'onClick={this.Reset}>ChangeImage</button>&nbsp;
                <button className='btn btn-success mt-2'onClick={this.ZoomOut}>ZoomOut</button>
            </div>
        )
        return output;
    }
}
function Album()
{
    var output=(
        <div className='container'>
            <div className='row'>
                <div className='col-12'><h3>Picture</h3></div>
                <Picture height='200' width='230' src='https://picsum.photos/100?random=1'/>
                <Picture height='200' width='230' src='https://picsum.photos/100?random=2'/>
                <Picture height='200' width='230' src='https://picsum.photos/100?random=3'/>
                <Picture height='200' width='230' src='https://picsum.photos/100?random=4'/>
            </div>
        </div>
    )
    return output;
}

root.render(<Album/>);