package org.rudi.facet.bpmn.mapper.workflow;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.annotation.processing.Generated;

import org.rudi.facet.bpmn.bean.AssetDescription2Test;
import org.rudi.facet.bpmn.entity.workflow.AssetDescriptionEntity2Test;
import org.springframework.stereotype.Component;

@Generated(value = "org.mapstruct.ap.MappingProcessor", date = "2021-11-30T10:24:06+0100", comments = "version: 1.4.2.Final, compiler: javac, environment: Java 11 (Oracle Corporation)")
@Component
public class AssetDescriptionMapperImpl2Test implements AssetDescriptionMapper2Test {

	@Override
	public AssetDescriptionEntity2Test dtoToEntity(AssetDescription2Test arg0) {
		if (arg0 == null) {
			return null;
		}

		AssetDescriptionEntity2Test testAssetDescriptionEntity = new AssetDescriptionEntity2Test();

		testAssetDescriptionEntity.setUuid(arg0.getUuid());
		testAssetDescriptionEntity.setProcessDefinitionKey(arg0.getProcessDefinitionKey());
		testAssetDescriptionEntity.setProcessDefinitionVersion(arg0.getProcessDefinitionVersion());
		testAssetDescriptionEntity.setStatus(arg0.getStatus());
		testAssetDescriptionEntity.setFunctionalStatus(arg0.getFunctionalStatus());
		testAssetDescriptionEntity.setInitiator(arg0.getInitiator());
		testAssetDescriptionEntity.setUpdator(arg0.getUpdator());
		testAssetDescriptionEntity.setCreationDate(arg0.getCreationDate());
		testAssetDescriptionEntity.setUpdatedDate(arg0.getUpdatedDate());
		testAssetDescriptionEntity.setDescription(arg0.getDescription());
		testAssetDescriptionEntity.setAssignee(arg0.getAssignee());
		testAssetDescriptionEntity.setA(arg0.getA());

		return testAssetDescriptionEntity;
	}

	@Override
	public void dtoToEntity(AssetDescription2Test arg0, AssetDescriptionEntity2Test arg1) {
		if (arg0 == null) {
			return;
		}

		arg1.setUuid(arg0.getUuid());
		arg1.setProcessDefinitionKey(arg0.getProcessDefinitionKey());
		arg1.setProcessDefinitionVersion(arg0.getProcessDefinitionVersion());
		arg1.setStatus(arg0.getStatus());
		arg1.setFunctionalStatus(arg0.getFunctionalStatus());
		arg1.setInitiator(arg0.getInitiator());
		arg1.setUpdator(arg0.getUpdator());
		arg1.setCreationDate(arg0.getCreationDate());
		arg1.setUpdatedDate(arg0.getUpdatedDate());
		arg1.setDescription(arg0.getDescription());
		arg1.setAssignee(arg0.getAssignee());
		arg1.setA(arg0.getA());
	}

	@Override
	public List<AssetDescriptionEntity2Test> dtoToEntities(List<AssetDescription2Test> arg0) {
		if (arg0 == null) {
			return null;
		}

		List<AssetDescriptionEntity2Test> list = new ArrayList<AssetDescriptionEntity2Test>(arg0.size());
		for (AssetDescription2Test testAssetDescription : arg0) {
			list.add(dtoToEntity(testAssetDescription));
		}

		return list;
	}

	@Override
	public AssetDescription2Test entityToDto(AssetDescriptionEntity2Test arg0) {
		if (arg0 == null) {
			return null;
		}

		AssetDescription2Test testAssetDescription = new AssetDescription2Test();

		testAssetDescription.setUuid(arg0.getUuid());
		testAssetDescription.setProcessDefinitionKey(arg0.getProcessDefinitionKey());
		testAssetDescription.setProcessDefinitionVersion(arg0.getProcessDefinitionVersion());
		testAssetDescription.setStatus(arg0.getStatus());
		testAssetDescription.setFunctionalStatus(arg0.getFunctionalStatus());
		testAssetDescription.setInitiator(arg0.getInitiator());
		testAssetDescription.setUpdator(arg0.getUpdator());
		testAssetDescription.setDescription(arg0.getDescription());
		testAssetDescription.setAssignee(arg0.getAssignee());
		testAssetDescription.setCreationDate(arg0.getCreationDate());
		testAssetDescription.setUpdatedDate(arg0.getUpdatedDate());
		testAssetDescription.setA(arg0.getA());

		return testAssetDescription;
	}

	@Override
	public List<AssetDescription2Test> entitiesToDto(Collection<AssetDescriptionEntity2Test> arg0) {
		if (arg0 == null) {
			return null;
		}

		List<AssetDescription2Test> list = new ArrayList<AssetDescription2Test>(arg0.size());
		for (AssetDescriptionEntity2Test testAssetDescriptionEntity : arg0) {
			list.add(entityToDto(testAssetDescriptionEntity));
		}

		return list;
	}
}
