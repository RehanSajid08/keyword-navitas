
import { ContentOutput } from '@/components/OutputDisplay';

interface ContentGenerationParams {
  keywords: string;
  context: string;
  author?: string;
  apiKey?: string;
}

// This is a fallback mock service that simulates generating content
const mockGenerateContent = (params: ContentGenerationParams, showApiKeyNeeded: boolean = false): ContentOutput => {
  const keywords = params.keywords.split(',').map(k => k.trim());
  const mainKeyword = keywords[0];
  
  // Show a message if API key is needed
  if (showApiKeyNeeded) {
    return {
      pillarContent: {
        title: "OpenAI API Key Required",
        content: "# OpenAI API Key Required\n\nTo generate high-quality, SEO-optimized content, you need to provide a valid OpenAI API key. Please enter your API key in the form and try again.\n\n## Getting an API Key\n\n1. Go to [OpenAI's platform](https://platform.openai.com/)\n2. Sign up or log in to your account\n3. Navigate to the API section\n4. Generate a new API key\n5. Copy the key and paste it in the API Key field in the form\n\n## Why We Need This\n\nAn API key is required to access OpenAI's powerful GPT-4 model, which generates the content for your SEO strategy. We don't store your API key - it's used only for this request."
      },
      supportingPages: [
        {
          title: "How to Get Started with OpenAI for Content Creation",
          summary: "A guide to setting up and using OpenAI's API for content creation, including best practices and tips for optimal results.",
        },
        {
          title: "Understanding API Usage and Billing",
          summary: "Learn about OpenAI's pricing model, how API calls are billed, and strategies to optimize your usage for cost-effectiveness.",
        },
        {
          title: "Security Best Practices for API Keys",
          summary: "Important security considerations when working with API keys, including how to protect your credentials and manage access securely.",
        }
      ],
      metaTags: {
        title: "OpenAI API Key Required | Content Generation Tool",
        description: "Learn how to set up and use your OpenAI API key with our content generation tool for SEO-optimized content creation.",
        keywords: "OpenAI API, content generation, API key setup, GPT-4",
      },
      socialMedia: {
        linkedin: [
          "🔑 Using AI for content creation requires an API key. Learn how to set up your OpenAI API key and start generating high-quality, SEO-optimized content with our tool.",
          
          "⚠️ Security alert: When working with API keys, always follow best practices for credential management. Never share your keys or commit them to public repositories.",
          
          "💡 Did you know? Using an OpenAI API key gives you more control over the content generation process, allowing for customization and improved results tailored to your needs."
        ],
      },
    };
  }
  
  // Mock response data for regular content
  return {
    pillarContent: {
      title: `Complete Guide to ${mainKeyword}: Strategies, Tips, and Best Practices`,
      content: `# ${mainKeyword}: A Comprehensive Guide\n\n## Introduction\n\nIn today's digital landscape, ${mainKeyword} has become increasingly important for businesses looking to establish a strong online presence. This guide explores the key aspects of ${mainKeyword}, providing actionable insights and strategies.\n\n## Why ${mainKeyword} Matters\n\n${mainKeyword} enables businesses to connect with their target audience more effectively. By implementing the right strategies, companies can increase visibility, drive engagement, and ultimately boost conversions.\n\n## Key Strategies for ${mainKeyword}\n\n1. **Research and Planning**: Before diving into ${mainKeyword}, thorough research is essential to understand your audience's needs and preferences.\n\n2. **Implementation**: Develop a structured approach to implementing ${mainKeyword} strategies across your digital channels.\n\n3. **Measurement**: Track the performance of your ${mainKeyword} efforts using relevant metrics and KPIs.\n\n4. **Optimization**: Continuously refine your ${mainKeyword} approach based on performance data and emerging trends.\n\n## Best Practices for ${mainKeyword}\n\n- Stay updated with the latest trends and developments in ${mainKeyword}\n- Focus on creating value for your audience rather than just promoting your products or services\n- Integrate ${mainKeyword} with your overall marketing strategy for a cohesive approach\n- Invest in the right tools and technologies to streamline your ${mainKeyword} efforts\n\n## Conclusion\n\n${mainKeyword} is not just a trend but a fundamental aspect of modern business success. By following the strategies and best practices outlined in this guide, you can leverage ${mainKeyword} to drive meaningful results for your business.`,
    },
    supportingPages: [
      {
        title: `10 Essential ${mainKeyword} Tools for 2023`,
        summary: `This guide explores the top 10 essential tools for ${mainKeyword} that businesses should consider in 2023. From analytics platforms to content creation tools, we cover everything you need to enhance your ${mainKeyword} strategy and stay ahead of the competition.`,
      },
      {
        title: `${mainKeyword} Case Studies: Success Stories and Lessons Learned`,
        summary: `Explore real-world examples of successful ${mainKeyword} implementations. This page presents detailed case studies that highlight effective strategies, measurable results, and valuable lessons that can be applied to your own ${mainKeyword} efforts.`,
      },
      {
        title: `The Future of ${mainKeyword}: Trends and Predictions`,
        summary: `Stay ahead of the curve with our analysis of emerging trends and predictions for the future of ${mainKeyword}. This forward-looking guide examines technological advancements, changing consumer behaviors, and industry shifts that will shape ${mainKeyword} in the coming years.`,
      }
    ],
    metaTags: {
      title: `${mainKeyword} Guide: Strategies, Best Practices & Tools | ${params.author || 'Expert Insights'}`,
      description: `Comprehensive guide to ${mainKeyword} covering essential strategies, best practices, and expert tips. Learn how to implement effective ${mainKeyword} techniques for your business.`,
      keywords: `${params.keywords}, ${mainKeyword} strategy, ${mainKeyword} best practices, ${mainKeyword} guide`,
    },
    socialMedia: {
      linkedin: [
        `📊 Just published: "Complete Guide to ${mainKeyword}"\n\nAfter months of research and working with industry experts, I'm excited to share our comprehensive guide on ${mainKeyword}.\n\nIn this guide, you'll discover:\n✅ Proven strategies for implementing ${mainKeyword}\n✅ Common pitfalls to avoid\n✅ Tools that can streamline your ${mainKeyword} efforts\n\nCheck out the full guide here: [Link]\n\n#${mainKeyword.replace(/\s+/g, '')} #DigitalStrategy`,
        
        `🔍 Looking to improve your ${mainKeyword} strategy?\n\nOur latest research shows that businesses effectively implementing ${mainKeyword} see a 40% increase in engagement and 25% higher conversion rates.\n\nI've compiled our key findings in a new guide that breaks down exactly what works (and what doesn't).\n\nRead it here: [Link]\n\n#${mainKeyword.replace(/\s+/g, '')} #BusinessGrowth`,
        
        `💡 "The best time to focus on ${mainKeyword} was yesterday. The second best time is now."\n\nIf you're still on the fence about investing in ${mainKeyword}, our new comprehensive guide might change your mind.\n\nIt covers everything from beginner basics to advanced techniques used by industry leaders.\n\nLink in comments 👇\n\n#${mainKeyword.replace(/\s+/g, '')} #ProfessionalDevelopment`
      ],
    },
  };
};

// Generate content using OpenAI API
export const generateContent = async (params: ContentGenerationParams): Promise<ContentOutput> => {
  try {
    if (!params.apiKey) {
      console.log('OpenAI API key not provided, using mock data');
      return mockGenerateContent(params, true);
    }
    
    console.log('Generating content with OpenAI...');
    
    const prompt = `
      Create a comprehensive content package for the following:
      
      Keywords: ${params.keywords}
      Content Context: ${params.context}
      ${params.author ? `Author: ${params.author}` : ''}
      
      Please generate:
      
      1. A pillar content piece with:
         - An engaging title
         - Comprehensive content in markdown format with sections including introduction, importance, strategies, best practices, and conclusion
      
      2. Three supporting page ideas with:
         - Compelling titles
         - Brief summaries (2-3 sentences each) that complement the pillar content
      
      3. Meta tags:
         - SEO-optimized title (under 60 characters)
         - Meta description (under 160 characters)
         - Keywords list
      
      4. Three LinkedIn posts to promote the content (under 1200 characters each)
    `;
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${params.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a content strategy assistant that creates comprehensive content packages including pillar content, supporting page ideas, meta tags, and social media posts. Respond with well-structured content in the format requested.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
      }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // Process the OpenAI response text to extract the components
    // This is a simple parser but could be enhanced with more reliable extraction
    const extractContent = (text: string): ContentOutput => {
      const keywords = params.keywords.split(',').map(k => k.trim());
      const mainKeyword = keywords[0];
      
      let pillarTitle = '';
      let pillarContent = '';
      const supportingPages: Array<{title: string, summary: string}> = [];
      let metaTitle = '';
      let metaDescription = '';
      let metaKeywords = '';
      const linkedinPosts: string[] = [];
      
      // Basic extraction - this could be improved with regex
      const sections = text.split('\n\n');
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        
        if (section.toLowerCase().includes('title:') && pillarTitle === '') {
          pillarTitle = section.split('Title:')[1]?.trim() || `Guide to ${mainKeyword}`;
        }
        
        if (section.match(/^#\s/)) {
          // Start of markdown content
          pillarContent = sections.slice(i).join('\n\n');
          break;
        }
      }
      
      // Extract supporting pages
      const supportingRegex = /supporting page/i;
      const supportingTitleRegex = /title:\s*(.*)/i;
      const supportingSummaryRegex = /summary:\s*(.*)/i;
      let inSupportingSection = false;
      let currentTitle = '';
      let currentSummary = '';
      
      for (const section of sections) {
        if (supportingRegex.test(section) || (inSupportingSection && supportingPages.length < 3)) {
          inSupportingSection = true;
          
          const titleMatch = section.match(supportingTitleRegex);
          if (titleMatch) {
            if (currentTitle && currentSummary) {
              supportingPages.push({ title: currentTitle, summary: currentSummary });
              currentTitle = '';
              currentSummary = '';
            }
            currentTitle = titleMatch[1];
          }
          
          const summaryMatch = section.match(supportingSummaryRegex);
          if (summaryMatch) {
            currentSummary = summaryMatch[1];
            if (currentTitle && currentSummary) {
              supportingPages.push({ title: currentTitle, summary: currentSummary });
              currentTitle = '';
              currentSummary = '';
            }
          }
        }
      }
      
      // If we have an incomplete supporting page at the end
      if (currentTitle && currentSummary && supportingPages.length < 3) {
        supportingPages.push({ title: currentTitle, summary: currentSummary });
      }
      
      // Fill in any missing supporting pages
      while (supportingPages.length < 3) {
        supportingPages.push({
          title: `${mainKeyword} Best Practices for ${new Date().getFullYear()}`,
          summary: `A detailed exploration of the latest best practices for ${mainKeyword}, including expert tips, industry insights, and actionable strategies for implementation.`
        });
      }
      
      // Extract meta tags
      for (const section of sections) {
        if (section.toLowerCase().includes('meta title:') || section.toLowerCase().includes('title tag:')) {
          metaTitle = section.split(/meta title:|title tag:/i)[1]?.trim() || '';
        }
        if (section.toLowerCase().includes('meta description:')) {
          metaDescription = section.split(/meta description:/i)[1]?.trim() || '';
        }
        if (section.toLowerCase().includes('keywords:')) {
          metaKeywords = section.split(/keywords:/i)[1]?.trim() || '';
        }
      }
      
      // Extract LinkedIn posts
      let linkedinSection = false;
      for (const section of sections) {
        if (section.toLowerCase().includes('linkedin post') || linkedinSection) {
          linkedinSection = true;
          if (!section.toLowerCase().includes('linkedin post') && section.length > 20) {
            linkedinPosts.push(section);
            if (linkedinPosts.length >= 3) break;
          }
        }
      }
      
      // Fill in any missing LinkedIn posts
      while (linkedinPosts.length < 3) {
        linkedinPosts.push(`📊 Just published: "Guide to ${mainKeyword}"\n\nExcited to share our comprehensive guide on ${mainKeyword}.\n\nIn this guide, you'll discover:\n✅ Proven strategies\n✅ Common pitfalls to avoid\n✅ Tools and resources\n\nCheck out the full guide here: [Link]\n\n#${mainKeyword.replace(/\s+/g, '')} #DigitalStrategy`);
      }
      
      // Return the content output
      return {
        pillarContent: {
          title: pillarTitle || `Complete Guide to ${mainKeyword}`,
          content: pillarContent || `# ${mainKeyword}: A Comprehensive Guide\n\nThis is a placeholder for the comprehensive guide content.`
        },
        supportingPages,
        metaTags: {
          title: metaTitle || `${mainKeyword} Guide | ${params.author || 'Expert Insights'}`,
          description: metaDescription || `Comprehensive guide to ${mainKeyword} covering strategies, best practices, and expert tips for your business.`,
          keywords: metaKeywords || `${params.keywords}, ${mainKeyword} strategies, ${mainKeyword} best practices`
        },
        socialMedia: {
          linkedin: linkedinPosts
        }
      };
    };
    
    return extractContent(content);
    
  } catch (error) {
    console.error('Error generating content:', error);
    // Fallback to mock data if API fails
    return mockGenerateContent(params);
  }
};
