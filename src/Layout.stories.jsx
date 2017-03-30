import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import {
  Layout,
  MainHeader,
  MainSidebar,
  Content,
  Box,
  MainFooter,
} from '.';

const menuClickAction = action('menu click');

storiesOf('Layout', module)
  .add('default (fixed)', () => (
    <Layout skin="blue">
      <MainHeader>
        <MainHeader.Logo>
          <MainHeader.Logo.Large><b>Admin</b>LTE</MainHeader.Logo.Large>
          <MainHeader.Logo.Mini><b>A</b>LT</MainHeader.Logo.Mini>
        </MainHeader.Logo>
        <MainHeader.Navbar>
          <MainHeader.SidebarToggle />
        </MainHeader.Navbar>
      </MainHeader>
      <MainSidebar>
        <MainSidebar.Menu>
          <MainSidebar.Menu.Header>MAIN NAVIGATION</MainSidebar.Menu.Header>
          <MainSidebar.Menu.Item
            href="/widgets"
            iconName="th"
            onClick={e => { e.preventDefault(); menuClickAction(e); }}
            title="Widgets"
          >
            <MainSidebar.Menu.Item.AddonList>
              <MainSidebar.Menu.Item.Addon background="green">
                new
              </MainSidebar.Menu.Item.Addon>
            </MainSidebar.Menu.Item.AddonList>
          </MainSidebar.Menu.Item>
        </MainSidebar.Menu>
      </MainSidebar>
      <Content>
        <Content.Header
          title="Fixed Layout"
          description="Blank example to the fixed layout"
        />
        <Content.Body>
          <Box>
            <Box.Header border>
              <Box.Title>Title</Box.Title>
            </Box.Header>
            <Box.Body>Start creating your amazing application!</Box.Body>
            <Box.Footer>Footer</Box.Footer>
          </Box>
        </Content.Body>
      </Content>
      <MainFooter>
        <div className="pull-right"><b>Version</b> 2.3.11</div>
        <strong>Copyright © 2017.</strong> All rights reserved.
      </MainFooter>
    </Layout>
  ))
  .add('boxed', () => (
    <Layout boxed skin="blue">
      <MainHeader>
        <MainHeader.Logo>
          <MainHeader.Logo.Large><b>Admin</b>LTE</MainHeader.Logo.Large>
          <MainHeader.Logo.Mini><b>A</b>LT</MainHeader.Logo.Mini>
        </MainHeader.Logo>
        <MainHeader.Navbar>
          <MainHeader.SidebarToggle />
        </MainHeader.Navbar>
      </MainHeader>
      <MainSidebar>
        <MainSidebar.Menu>
          <MainSidebar.Menu.Header>MAIN NAVIGATION</MainSidebar.Menu.Header>
          <MainSidebar.Menu.Item
            href="/widgets"
            iconName="th"
            onClick={e => { e.preventDefault(); menuClickAction(e); }}
            title="Widgets"
          >
            <MainSidebar.Menu.Item.AddonList>
              <MainSidebar.Menu.Item.Addon background="green">
                new
              </MainSidebar.Menu.Item.Addon>
            </MainSidebar.Menu.Item.AddonList>
          </MainSidebar.Menu.Item>
        </MainSidebar.Menu>
      </MainSidebar>
      <Content>
        <Content.Header
          title="Boxed Layout"
          description="Blank example to the boxed layout"
        />
        <Content.Body>
          <Box>
            <Box.Header>
              <Box.Title>Title</Box.Title>
            </Box.Header>
            <Box.Body>Start creating your amazing application!</Box.Body>
            <Box.Footer>Footer</Box.Footer>
          </Box>
        </Content.Body>
      </Content>
      <MainFooter>
        <div className="pull-right"><b>Version</b> 2.3.11</div>
        <strong>Copyright © 2017.</strong> All rights reserved.
      </MainFooter>
    </Layout>
  ))
  .add('collapsed sidebar', () => (
    <Layout boxed skin="blue">
      <MainHeader>
        <MainHeader.Logo>
          <MainHeader.Logo.Large><b>Admin</b>LTE</MainHeader.Logo.Large>
          <MainHeader.Logo.Mini><b>A</b>LT</MainHeader.Logo.Mini>
        </MainHeader.Logo>
        <MainHeader.Navbar>
          <MainHeader.SidebarToggle />
        </MainHeader.Navbar>
      </MainHeader>
      <MainSidebar collapsed>
        <MainSidebar.Menu>
          <MainSidebar.Menu.Header>MAIN NAVIGATION</MainSidebar.Menu.Header>
          <MainSidebar.Menu.Item
            href="/widgets"
            iconName="th"
            onClick={e => { e.preventDefault(); menuClickAction(e); }}
            title="Widgets"
          >
            <MainSidebar.Menu.Item.AddonList>
              <MainSidebar.Menu.Item.Addon background="green">
                new
              </MainSidebar.Menu.Item.Addon>
            </MainSidebar.Menu.Item.AddonList>
          </MainSidebar.Menu.Item>
        </MainSidebar.Menu>
      </MainSidebar>
      <Content>
        <Content.Header
          title="Boxed Layout"
          description="Blank example to the boxed layout"
        />
        <Content.Body>
          <Box>
            <Box.Header>
              <Box.Title>Title</Box.Title>
            </Box.Header>
            <Box.Body>Start creating your amazing application!</Box.Body>
            <Box.Footer>Footer</Box.Footer>
          </Box>
        </Content.Body>
      </Content>
      <MainFooter>
        <div className="pull-right"><b>Version</b> 2.3.11</div>
        <strong>Copyright © 2017.</strong> All rights reserved.
      </MainFooter>
    </Layout>
  ));
