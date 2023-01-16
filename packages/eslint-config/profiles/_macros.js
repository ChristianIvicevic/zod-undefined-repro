const expandNamingConventionSelectors = (inputBlocks) => {
  const firstPassBlocks = [];

  // Expand "selectors" --> "selector"
  for (const block of inputBlocks) {
    for (const selector of block.selectors) {
      const expandedBlock = { ...block };
      delete expandedBlock.selectors;
      expandedBlock.selector = selector;
      firstPassBlocks.push(expandedBlock);
    }
  }

  // Expand "enforceLeadingUnderscoreWhenPrivate" --> "leadingUnderscore"
  const secondPassBlocks = [];
  for (const block of firstPassBlocks) {
    if (block.enforceLeadingUnderscoreWhenPrivate) {
      const expandedBlock1 = {
        ...block,
        leadingUnderscore: 'allow'
      };
      delete expandedBlock1.enforceLeadingUnderscoreWhenPrivate;
      secondPassBlocks.push(expandedBlock1);

      const expandedBlock2 = {
        ...block,
        modifiers: ['private'],
        leadingUnderscore: 'require'
      };
      delete expandedBlock2.enforceLeadingUnderscoreWhenPrivate;
      secondPassBlocks.push(expandedBlock2);
    } else {
      secondPassBlocks.push(block);
    }
  }

  return secondPassBlocks;
};

exports.expandNamingConventionSelectors = expandNamingConventionSelectors;
