import { CardContent, Card, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
function Presentation() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Link to='/formbuilder/formA' style={{ textDecoration: 'none' }}>
                <Card style={{ maxWidth: '300px' }}>
                    <CardMedia image='https://logowik.com/content/uploads/images/google-forms8392.jpg'
                        component='img'
                        height="150"
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                        <h3>Form A</h3>
                    </CardContent>
                </Card>
            </Link>
            <Link to='/formbuilder/formB' style={{ textDecoration: 'none' }}>
                <Card style={{ maxWidth: '300px' }}>
                    <CardMedia image='https://logowik.com/content/uploads/images/google-forms8392.jpg'
                        component='img'
                        height="150"
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                        <h3>Form B</h3>
                    </CardContent>
                </Card>
            </Link>
            <Link to='/formbuilder/appraisal' style={{ textDecoration: 'none' }}>
                <Card style={{ maxWidth: '300px' }}>
                    <CardMedia image='https://logowik.com/content/uploads/images/google-forms8392.jpg'
                        component='img'
                        height="150"
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                        <h3>Appraisal</h3>
                    </CardContent>
                </Card>
            </Link>

        </div>
    )
}

export default Presentation