// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';
import { BsArrowUpRight } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

// Internal Components
import { LinkTo } from '../components/SharedStyling';
import { SectionV2, ContentV2, ItemHV2, ItemVV2, SpanV2, Atag } from 'components/SharedStylingV2';
import EmailInputTextField from '../components/EmailInputTextField';
import { ReactComponent as PushLogoTextWhite } from '../assets/PushLogoTextWhite.svg';
import { ReactComponent as TwitterSVG } from '../assets/twitter.svg';
import { ReactComponent as GithubSVG } from '../assets/github.svg';
import { ReactComponent as DiscordSVG } from '../assets/discord.svg';
import { ReactComponent as TelegramSVG } from '../assets/telegram.svg';
import { ReactComponent as AppleSVG } from '../assets/apple.svg';
import { ReactComponent as AndroidSVG } from '../assets/android.svg';
import { ReactComponent as PushBellSVG } from '../assets/pushBell.svg';
import { ReactComponent as FooterJoinusFigure } from '../assets/figures/footerjoinus.svg';
import { ReactComponent as FooterFollowusFigure } from '../assets/figures/footerfollowus.svg';

// Internal Configs
import { device } from '../config/globals';

function Footer() {
  // Internationalization
  const { t } = useTranslation();

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

  return (
    <StyledFooter>
      <ResponsiveSection
        id="footer"
        background="#121315"
        padding="160px 0 0 0"
      >
        <ContentV2
          className="contentBox"
          padding="40px 0px"
          alignSelf="center"
        >
          {/* Information Cards */}

          <ItemHV2 gap="32px">
            <InfoCard>
              <FooterJoinusFigure
                className="figureSvg"
                alt={t('footer.info-section.positions-card.image-alt')}
                title={t('footer.info-section.positions-card.image-title')}
              />

              <InfoDetails>
                <SpanV2
                  color="#FFF"
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="142%"
                >
                  {t('footer.info-section.positions-card.text')}
                </SpanV2>
                <FooterAnchorPrimary
                  href="https://angel.co/company/push-protocol"
                  title={t('footer.info-section.positions-card.link-text')}
                  target="_blank"
                >
                  {t('footer.info-section.positions-card.link-text')}&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>

            <InfoCard>
              <FooterFollowusFigure
                className="figureSvg"
                alt={t('footer.info-section.docs-card.image-alt')}
                title={t('footer.info-section.docs-card.image-title')}
              />

              <InfoDetails>
                <SpanV2
                  color="#FFF"
                  fontWeight="500"
                  fontSize="24px"
                  lineHeight="142%"
                >
                  {t('footer.info-section.docs-card.text')}
                </SpanV2>
                <FooterAnchorPrimary
                  href="https://docs.push.org/developers"
                  title={t('footer.info-section.docs-card.link-text')}
                  target="_blank"
                >
                  {t('footer.info-section.docs-card.link-text')}&nbsp;
                  <BsArrowUpRight className="anchorSVGlink" />
                </FooterAnchorPrimary>
              </InfoDetails>
            </InfoCard>
          </ItemHV2>

          {/* footer links */}
          <ItemHV2
            gap="32px"
            margin="120px 0 0 0"
          >
            <FooterContainer>
              <FooterColumn>
                <FooterLinks>
                  <SpanV2
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.company-column.title')}
                  </SpanV2>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/frens"
                    title={t('footer.links-section.company-column.push-ecosystem-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.company-column.push-ecosystem-link')}
                  </FooterAnchorSecondary>
                  <FooterAnchorSecondary
                    href="https://www.notion.so/pushprotocol/Push-Brand-Guide-Media-Kit-6f9db19d513c4365a1faa6c244515498"
                    title={t('footer.links-section.company-column.media-kit-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.company-column.media-kit-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/tos"
                    title={t('footer.links-section.company-column.terms-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.company-column.terms-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/privacy"
                    title={t('footer.links-section.company-column.privacy-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.company-column.privacy-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <SpanV2
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.governance-column.title')}
                  </SpanV2>

                  <FooterAnchorSecondary
                    href="https://gov.push.org"
                    title={t('footer.links-section.governance-column.push-governance-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.push-governance-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://docs.push.org/governance"
                    title={t('footer.links-section.governance-column.guides-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.guides-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://gov.push.org/top?period=yearly"
                    title={t('footer.links-section.governance-column.forum-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.forum-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://www.notion.so/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a"
                    title={t('footer.links-section.governance-column.grants-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.grants-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://snapshot.org/#/epns.eth"
                    title={t('footer.links-section.governance-column.snapshot-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.governance-column.snapshot-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <SpanV2
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.resources-column.title')}
                  </SpanV2>
                  <FooterAnchorSecondary
                    href="https://push-protocol.medium.com/"
                    title={t('footer.links-section.resources-column.blog-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.blog-link')}
                  </FooterAnchorSecondary>
                  <FooterAnchorSecondary
                    href="https://whitepaper.push.org/"
                    title={t('footer.links-section.resources-column.whitepaper-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.whitepaper-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://github.com/ethereum-push-notification-service"
                    title={t('footer.links-section.resources-column.github-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.github-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://discord.gg/pushprotocol"
                    title={t('footer.links-section.resources-column.discord-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.discord-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    href="https://docs.push.org/developers"
                    title={t('footer.links-section.resources-column.dev-guides-link')}
                    target="_blank"
                  >
                    {t('footer.links-section.resources-column.dev-guides-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <SpanV2
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.subscribe-column.title')}
                  </SpanV2>

                  <FooterAnchorSecondary
                    href="mailto:support@epns.io"
                    target="_blank"
                  >
                    {t('footer.links-section.subscribe-column.contact-us-link')}
                  </FooterAnchorSecondary>

                  <FooterAnchorSecondary
                    as={LinkTo}
                    to="/faq"
                    title={t('footer.links-section.subscribe-column.faq-link')}
                    onClick={scrollToTop}
                  >
                    {t('footer.links-section.subscribe-column.faq-link')}
                  </FooterAnchorSecondary>
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <SpanV2
                    fontWeight="400"
                    fontSize="18px"
                    lineHeight="142%"
                  >
                    {t('footer.links-section.support-column.title')}
                  </SpanV2>

                  <EmailInputTextField placeholder={t('footer.links-section.support-column.email-placeholder')} />
                </FooterLinks>
              </FooterColumn>
            </FooterContainer>
          </ItemHV2>

          {/* Social Icon Links */}
          <SocialLinks gap="32px">
            <ItemHV2
              justifyContent="flex-start"
              flex="1"
              gap="12px"
              className="pushLinks"
            >
              <LinkTo
                className="pushLogo"
                to="/"
                title="Push"
                onClick={scrollToTop}
              >
                <PushLogoTextWhite />
              </LinkTo>

              <FooterAnchorIcon
                href="https://github.com/ethereum-push-notification-service"
                title="Push Github"
                target="_blank"
              >
                <GithubSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
              <FooterAnchorIcon
                href="https://twitter.com/pushprotocol"
                title="Push Twitter"
                target="_blank"
              >
                <TwitterSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://t.me/epnsproject"
                title="Push Telegram"
                target="_blank"
              >
                <TelegramSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
              <FooterAnchorIcon
                href="https://discord.gg/pushprotocol"
                title="Push Discord"
                target="_blank"
              >
                <DiscordSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
            </ItemHV2>

            <ItemHV2
              justifyContent="flex-end"
              flex="1"
              gap="12px"
              className="pushPlatformLinks"
            >
              <FooterAnchorIcon
                href="https://apps.apple.com/app/ethereum-push-service-epns/id1528614910"
                title="Push iOS app"
                target="_blank"
              >
                <AppleSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://play.google.com/store/apps/details?id=io.epns.epns"
                title="Push Android app"
                target="_blank"
              >
                <AndroidSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>

              <FooterAnchorIcon
                href="https://app.push.org"
                title="Push Dapp"
                target="_blank"
              >
                <PushBellSVG
                  width={22}
                  height={22}
                />
              </FooterAnchorIcon>
            </ItemHV2>
          </SocialLinks>
        </ContentV2>
      </ResponsiveSection>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  font-family: 'Strawford';
  display: flex;
  position: relative;
`;

const ResponsiveSection = styled(SectionV2)`
  flex-direction: column;
  @media ${device.tablet} {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
`;

const InfoCard = styled(ItemVV2)`
  border-radius: 32px;
  background: #2a2a39;
  padding: 48px 30px 48px 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 32px;
  box-sizing: border-box;

  & svg.figureSvg {
    width: 72px;
    height: 72px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    row-gap: 16px;

    & svg.figureSvg {
    }
  }
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100% - 116px);

  @media ${device.tablet} {
    align-items: center;

    & span {
      text-align: center;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  box-sizing: border-box;
  color: #ffffff;

  flex-direction: column;

  align-items: center;

  @media ${device.tablet} {
    flex-basis: 50%;
    padding: 12px;
    row-gap: 16px;

    align-items: flex-start;

    & span {
      font-size: 20px;
    }

    &:last-child {
      flex-basis: 100%;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

const SocialLinks = styled(ItemHV2)`
  margin: 80px 0 40px 0;
  position: relative;

  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    top: -24px;
    left: 0;
    height: 1px;
    width: 100%;
    background: #2a2a39;
  }

  @media ${device.tablet} {
    flex-direction: column;

    & .pushLinks {
      justify-content: center;

      & a.pushLogo {
        flex: 0 0 100%;
      }
    }

    & .pushPlatformLinks {
      justify-content: center;
    }
  }
`;

const FooterAnchorPrimary = styled(Atag)`
  color: #dd44b9;
  border-radius: 16px;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 142%;
  justify-content: flex-start;
  background: transparent;

  &:hover & {
    filter: transparent;
  }
  &:before {
    background: transparent;
  }
  &:after {
    background: transparent;
  }
`;

const FooterAnchorSecondary = styled(Atag)`
  color: #9c9cbe;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: normal;
  line-height: 142%;
  justify-content: flex-start;
  background: transparent;

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(Atag)`
  border: 1px solid #2a2a39;
  border-radius: 12px;
  padding: 10px;
`;

export default Footer;
