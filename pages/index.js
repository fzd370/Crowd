import factory from '../ethereum/factory';
import React, {Component} from 'react';
import {Card, Button} from 'semantic-ui-react';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address=>{
            return{
                header:address,
                description:<a>View campaign</a>,
                fluid:true
            };
        });

        return <Card.Group items={items}/>;
    }

    render(){
        return (
        <Layout>
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css"></link>
            <h3>Open Campaigns</h3>
            {this.renderCampaigns()}
            <Button
            content="Create Campaign"
            icon="add circle"
            primary
            />
        </div>
        </Layout>
        );
    }
}

export default CampaignIndex;