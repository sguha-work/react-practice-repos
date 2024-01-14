import { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null }
    }
    componentDidCatch(error) {
        this.setState({ hasError: true, error })
    }
    static getDerivedStateFromError = (error) => {
        return { hasError: true, error };
    };
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return (
                    <>
                        {this.props.fallback}
                    </>
                );
            } else {
                return (
                    <>
                        <h3>Error occured</h3>
                        <p><b>Description: </b>
                            {this.state.error.toString()}
                        </p>
                    </>
                )
            }
        } else {
            return (
                <>
                    {this.props.children}
                </>
            );
        }
    }
}
