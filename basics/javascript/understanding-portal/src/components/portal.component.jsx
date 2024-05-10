import { createPortal } from 'react-dom';

function PortalComponent() {
    return (
        <>
            {
                createPortal(
                    <div>PortalComponent</div>
                    , document.body)
            }
        </>
    )
}

export default PortalComponent